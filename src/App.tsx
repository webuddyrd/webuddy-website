import { Routes, Route } from 'react-router-dom';
import { LanguageLayout } from './components/layout/LanguageLayout';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { SolutionDetail } from './pages/SolutionDetail';
import { Work } from './pages/Work';
import { HowWeWork } from './pages/HowWeWork';
import { About } from './pages/About';
import { Insights } from './pages/Insights';
import { InsightArticle } from './pages/InsightArticle';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// The same pages are mounted at the root (English) and under /es (Spanish).
// Keep src/routes.ts in sync so every page is prerendered.
const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="solutions" element={<Solutions />} />
    <Route path="solutions/:slug" element={<SolutionDetail />} />
    <Route path="work" element={<Work />} />
    <Route path="how-we-work" element={<HowWeWork />} />
    <Route path="about" element={<About />} />
    <Route path="insights" element={<Insights />} />
    <Route path="insights/:slug" element={<InsightArticle />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/es" element={<LanguageLayout lang="es" />}>
        {pages}
      </Route>
      <Route path="/" element={<LanguageLayout lang="en" />}>
        {pages}
      </Route>
    </Routes>
  );
}

export default App;
