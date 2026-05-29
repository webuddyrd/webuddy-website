import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/projects');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const sites = [
    { name: 'germsout-dominicana-products', url: 'https://germsout.store/?post_type=product' }
];

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const site of sites) {
        console.log(`Processing ${site.name}...`);
        const page = await browser.newPage();
        await page.setViewport({ width: 1600, height: 900 });

        try {
            console.log(`  Navigating to ${site.url}`);
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 });

            // Hide generic cookie banners / chat widgets
            await page.evaluate(() => {
                const selectors = [
                    '[id*="cookie"]', '[class*="cookie"]',
                    '[id*="chat"]', '[class*="chat"]',
                    'iframe',
                    '#wpfront-notification-bar'
                ];
                selectors.forEach(sel => {
                    document.querySelectorAll(sel).forEach(el => {
                        try { el.style.display = 'none'; } catch (e) { }
                    });
                });
            });

            // Wait a bit for animations to settle
            await new Promise(r => setTimeout(r, 2000));

            // Capture Original
            const originalPath = path.join(outDir, `${site.name}-original.webp`);
            await page.screenshot({ path: originalPath, type: 'webp', quality: 90 });
            console.log(`  Saved ${originalPath}`);
        } catch (err) {
            console.error(`  Failed on ${site.name}:`, err.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    console.log("Done!");
})();
