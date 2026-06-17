import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Dr. Basalingappa' },
  { path: '/thesis-services', label: 'Thesis Services' },
  { path: '/publication-services', label: 'Publication Services' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" id="nav-logo">
          <div className="navbar__logo-icon">
            <Stethoscope size={22} />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">B.G.Doctor Global Research</span>
            <span className="navbar__logo-tag"> & Academic Solution</span>
          </div>
        </Link>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {link.label}
              <span className="navbar__link-indicator" />
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__cta-mobile" id="nav-cta-mobile">
            Get Consultation
          </Link>
        </div>

        <Link to="/contact" className="btn btn-primary navbar__cta" id="nav-cta">
          Get Consultation
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="navbar__overlay" onClick={() => setIsMobileOpen(false)} />
      )}
    </nav>
  );
}
