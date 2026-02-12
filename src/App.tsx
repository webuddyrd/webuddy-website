import { Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import './index.css';


function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
