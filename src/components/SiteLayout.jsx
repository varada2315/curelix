import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/range', label: 'Nutraceuticals' },
  { to: '/contact', label: 'Contact' },
];

function BrandMark({ inverse = false }) {
  return (
    <Link className={`brand brand-image${inverse ? ' brand-inverse' : ''}`} to="/" aria-label="Curelix Lifesciences home">
      <img
        className="brand-logo-image"
        src="/assets/curelix-logo.png"
        alt="Curelix Lifesciences"
      />
    </Link>
  );
}

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const currentName = navItems.find((item) => item.to === location.pathname)?.label || 'Home';

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link className="button button-small header-cta" to="/contact" onClick={closeMenu}>
              Talk to our team <ArrowUpRight size={15} strokeWidth={2} />
            </Link>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <BrandMark inverse />
            <p>A pharmaceutical and nutraceutical company with a people-first focus.</p>
          </div>
          <div className="footer-nav-block">
            <span className="eyebrow eyebrow-light">EXPLORE</span>
            <div className="footer-links">
              {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>)}
            </div>
          </div>
          <div className="footer-contact-block">
            <span className="eyebrow eyebrow-light">GET IN TOUCH</span>
            <a href="mailto:curelixlifesciences@gmail.com">curelixlifesciences@gmail.com</a>
            <a href="tel:+918851463013">+91 8851-463013</a>
            <a href="tel:+919818011734">+91 9818011734</a>
            <a
              className="footer-address"
              href="https://www.google.com/maps/search/?api=1&query=179%2C+2nd+Floor%2C+Raghuleela+Mega+Mall%2C+Behind+Kandivali+%28W%29%2C+Mumbai%2C+Maharashtra-400067"
              target="_blank"
              rel="noopener noreferrer"
            >
              179, 2nd Floor, Raghuleela Mega Mall, Behind Kandivali (W), Mumbai, Maharashtra-400067
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Curelix Lifesciences</span>
          <span className="footer-note">Nutrition-focused. People-first.</span>
          <span className="footer-credit">
            Built by{' '}
            <a
              className="footer-credit-link"
              href="https://growitate.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GROWITATE
            </a>
          </span>
        </div>
      </footer>
      <div className="page-indicator" aria-hidden="true"><span>{currentName}</span><i /></div>
    </div>
  );
}
