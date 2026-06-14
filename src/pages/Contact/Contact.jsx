import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  Sparkles, ChevronRight, CheckCircle2, ArrowRight, User,
  AtSign, PhoneCall, FileText, MessageSquare
} from 'lucide-react';
import './Contact.css';

const serviceOptions = [
  'Thesis Assistance',
  'Data Analysis',
  'Biostatistics Support',
  'Research Paper Writing',
  'Publication Support',
  'Journal Submission',
  'Other',
];

const contactInfo = [
  { icon: <Phone size={22} />, label: 'Phone Number', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: <MessageCircle size={22} />, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
  { icon: <Mail size={22} />, label: 'Email Address', value: 'info@medresearchpro.com', href: 'mailto:info@medresearchpro.com' },
  { icon: <Clock size={22} />, label: 'Working Hours', value: 'Mon–Fri: 9AM–7PM, Sat: 10AM–5PM', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main className="contact" id="contact-page">
      {/* ===== HERO ===== */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
          <div className="page-hero__grid-pattern" />
        </div>
        <div className="container page-hero__container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Contact Us</span>
          </div>
          <div className="page-hero__content">
            <div className="section-badge">
              <MessageCircle size={14} /> Contact Us
            </div>
            <h1 className="page-hero__title">
              Get In <span>Touch</span>
            </h1>
            <p className="page-hero__subtitle">
              Let's discuss your thesis, research, or publication requirements.
            </p>
          </div>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section contact-section" id="contact-form-section">
        <div className="container">
          <div className="contact__grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form__title">Send Us a Message</h2>
              <p className="contact-form__subtitle">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="contact-form__success" id="form-success-msg">
                  <CheckCircle2 size={20} />
                  <span>Thank you! Your inquiry has been submitted successfully.</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    <User size={16} /> Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      <AtSign size={16} /> Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      <PhoneCall size={16} /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">
                    <FileText size={16} /> Service Required
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="form-input form-select"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    <MessageSquare size={16} /> Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements..."
                    rows={5}
                    required
                    className="form-input form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg contact-form__submit" id="contact-submit-btn">
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="contact-info">
              <div className="contact-info__card">
                <h3 className="contact-info__title">Contact Information</h3>
                <p className="contact-info__desc">
                  Reach out to us through any of these channels.
                </p>
                <div className="contact-info__items">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="contact-info__item" id={`contact-info-${i}`}>
                      <div className="contact-info__icon">{item.icon}</div>
                      <div className="contact-info__details">
                        <span className="contact-info__label">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="contact-info__value" target="_blank" rel="noopener noreferrer">
                            {item.value}
                          </a>
                        ) : (
                          <span className="contact-info__value">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="contact-map" id="contact-map">
                <div className="contact-map__placeholder">
                  <MapPin size={32} color="var(--primary-500)" />
                  <p>Our Location</p>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="contact-cta">
        <div className="cta__bg">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
        </div>
        <div className="container cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Ready To Begin Your Academic Journey?</h2>
            <p className="cta__text">
              Our experts are here to support your research, thesis, and publication goals.
            </p>
            <button
              className="btn btn-white btn-lg"
              id="contact-final-cta"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send Inquiry <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
