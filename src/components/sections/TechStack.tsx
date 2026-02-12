import { Section } from '../ui/Section';


const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL", "TailwindCSS", "Framer Motion", "Three.js", "Python"
];

export const TechStack = () => {
    return (
        <Section className="py-32 bg-webuddy-card relative overflow-hidden" id="tech">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                            Engineering <span className="text-webuddy-electric">Authority</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            We don't rely on templates or page builders. We build scalable, maintainable, enterprise-ready systems using the industry's most robust technologies.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-3xl font-bold text-white mb-2">99+</div>
                                <div className="text-sm text-gray-400">Lighthouse Performance</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-sm text-gray-400">Type Safety</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual / Code Snippet */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#0f1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                <div className="ml-4 text-xs text-gray-500 font-mono">system.config.ts</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-gray-300">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">infrastructure</span> = <span className="text-yellow-300">{`{`}</span>{'\n'}
                                        {'  '}<span className="text-red-400">"scale"</span>: <span className="text-green-400">"global"</span>,{'\n'}
                                        {'  '}<span className="text-red-400">"security"</span>: <span className="text-green-400">"enterprise-grade"</span>,{'\n'}
                                        {'  '}<span className="text-red-400">"uptime"</span>: <span className="text-orange-400">99.99</span>,{'\n'}
                                        {'  '}<span className="text-red-400">"stack"</span>: [<span className="text-webuddy-blue">"Next.js"</span>, <span className="text-webuddy-blue">"TypeScript"</span>, <span className="text-webuddy-blue">"Rust"</span>]{'\n'}
                                        <span className="text-yellow-300">{`}`}</span>;<br />
                                        <br />
                                        <span className="text-gray-500">// Deploying high-performance architecture...</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee */}
                <div className="mt-24 pt-12 border-t border-white/5">
                    <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Powered by modern best practices</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-xl font-bold font-display">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
