import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin, ArrowUpRight, Heart, User } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/thesis-services', label: 'Thesis Services' },
  { path: '/publication-services', label: 'Publication Services' },
  { path: '/contact', label: 'Contact Us' },
];

const services = [
  'Medical Thesis Assistance',
  'Data Analysis',
  'Biostatistics Support',
  'Research Paper Writing',
  'Publication Support',
  'Journal Submission',
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon">
                  <Stethoscope size={20} />
                </div>
                <div className="footer__logo-text">
                  <span className="footer__logo-name">K.B.Guttedar</span>
                  <span className="footer__logo-tag">Scientific Research Publication & Academic Solutions</span>
                </div>
              </Link>
              <p className="footer__desc">
                Your trusted partner for medical research, thesis writing, data analysis, 
                and academic publication support.
              </p>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <User size={16} /> Dr. Basalingappa
                </div>
                <a href="mailto:basalingappa1987@gmail.com" className="footer__contact-item">
                  <Mail size={16} /> basalingappa1987@gmail.com
                </a>
                <a href="tel:+917899193404" className="footer__contact-item">
                  <Phone size={16} /> +91 78991 93404
                </a>
                <div className="footer__contact-item">
                  <MapPin size={16} /> India
                </div>
              </div>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__list">
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      <ArrowUpRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__list">
                {services.map(service => (
                  <li key={service}>
                    <Link to="/thesis-services" className="footer__link">
                      <ArrowUpRight size={14} />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Working Hours</h4>
              <div className="footer__hours">
                <div className="footer__hour-row">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
                <div className="footer__hour-row">
                  <span>Saturday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>
                <div className="footer__hour-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary footer__cta">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} MedResearch Pro. All rights reserved. Developed by Krypton Labs.
          </p>
        </div>
      </div>
    </footer>
  );
}
