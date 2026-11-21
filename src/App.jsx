import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import RangePage from './pages/RangePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior, block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior });
        }
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior });
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <SiteLayout>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/range" element={<RangePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </SiteLayout>
    </>
  );
}
