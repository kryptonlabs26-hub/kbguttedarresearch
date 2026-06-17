import { Link } from 'react-router-dom';
import {
  FileText, BookMarked, Stethoscope, PenLine, Search, Globe,
  Database, Upload, MessageSquare, Eye, ArrowRight, Send,
  Sparkles, ChevronRight, CheckCircle2, ExternalLink,
  Book, BookOpen, Award, MapPin, Shield
} from 'lucide-react';
import './PublicationServices.css';

const services = [
  { icon: <FileText size={26} />, title: 'Research Paper Development', desc: 'Preparation of original research manuscripts for publication.', color: '#0e74b8' },
  { icon: <BookMarked size={26} />, title: 'Review Articles', desc: 'Narrative reviews and comprehensive review article preparation.', color: '#8b5cf6' },
  { icon: <Stethoscope size={26} />, title: 'Case Reports', desc: 'Clinical case documentation and publication support.', color: '#14c9a8' },
  { icon: <PenLine size={26} />, title: 'Manuscript Editing', desc: 'Language editing, scientific editing, and formatting services.', color: '#f59e0b' },
  { icon: <Search size={26} />, title: 'Journal Selection', desc: 'Identifying suitable journals based on scope and research area.', color: '#ef4444' },
  { icon: <Globe size={26} />, title: 'Scopus Publication Support', desc: 'Guidance for publication in Scopus-indexed journals.', color: '#06b6d4' },
  { icon: <Database size={26} />, title: 'PubMed Publication Support', desc: 'Publication assistance for medical and healthcare researchers.', color: '#ec4899' },
  { icon: <Upload size={26} />, title: 'Journal Submission Handling', desc: 'Complete manuscript submission support.', color: '#6366f1' },
  { icon: <MessageSquare size={26} />, title: 'Reviewer Comment Management', desc: 'Professional handling of reviewer comments and revisions.', color: '#f97316' },
  { icon: <Eye size={26} />, title: 'Publication Tracking', desc: 'Monitoring manuscript progress until publication.', color: '#22c55e' },
  { icon: <Send size={26} />, title: 'Journal Publication', desc: 'Web of Science journal publication support.', color: '#3b82f6' },
  { icon: <FileText size={26} />, title: 'Systematic Review & Meta Analysis', desc: 'Paper writing and publications.', color: '#0e74b8' },
  { icon: <BookMarked size={26} />, title: 'Original Research Article', desc: 'Writing and publications of original research articles.', color: '#8b5cf6' },
  { icon: <Book size={26} />, title: 'Book Writing & Publication', desc: 'Comprehensive book writing and publication support.', color: '#14c9a8' },
  { icon: <BookOpen size={26} />, title: 'Book Chapter Writing', desc: 'Writing and publications of book chapters.', color: '#f59e0b' },
  { icon: <PenLine size={26} />, title: 'Review Article', desc: 'Writing and publications of review articles.', color: '#ef4444' },
  { icon: <Award size={26} />, title: 'NMC Approved Journals', desc: 'High indexed journal publications under NMC Approval.', color: '#06b6d4' },
  { icon: <Globe size={26} />, title: 'International & National Journals', desc: 'International and National high indexed journal publications.', color: '#ec4899' },
  { icon: <MapPin size={26} />, title: 'State Level Journals', desc: 'State level high indexed journal publications.', color: '#6366f1' },
  { icon: <Shield size={26} />, title: 'Patent Support', desc: 'Patent from Registration to Grant Support.', color: '#f97316' },
];

const platforms = [
  { name: 'Scopus', desc: 'World\'s largest abstract and citation database', color: '#f59e0b' },
  { name: 'PubMed', desc: 'Premier biomedical literature database', color: '#0e74b8' },
  { name: 'DOAJ', desc: 'Directory of Open Access Journals', color: '#14c9a8' },
  { name: 'Indexed Journals', desc: 'Reputed indexed journal networks', color: '#8b5cf6' },
];

const workflow = [
  { step: '01', title: 'Manuscript Review', desc: 'Quality assessment and gap analysis' },
  { step: '02', title: 'Journal Matching', desc: 'Find the best-fit journal' },
  { step: '03', title: 'Submission', desc: 'Complete submission handling' },
  { step: '04', title: 'Peer Review', desc: 'Navigate the review process' },
  { step: '05', title: 'Corrections', desc: 'Address reviewer feedback' },
  { step: '06', title: 'Publication', desc: 'Final publication confirmation' },
];

export default function PublicationServices() {
  return (
    <main className="publication" id="publication-page">
      {/* ===== HERO ===== */}
      <section className="page-hero" id="publication-hero">
        <div className="page-hero__bg">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
          <div className="page-hero__grid-pattern" />
        </div>
        <div className="container page-hero__container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Publication Services</span>
          </div>
          <div className="page-hero__content">
            <div className="section-badge">
              <Sparkles size={14} /> Publication Services
            </div>
            <h1 className="page-hero__title">
              Research Publication <span>Support</span>
            </h1>
            <p className="page-hero__subtitle">
              Publish your research in reputed indexed journals with expert assistance.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg" id="publication-hero-cta">
              Talk To Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section pub-services" id="pub-services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} /> What We Offer
            </div>
            <h2 className="section-title">
              Services We <span>Offer</span>
            </h2>
            <p className="section-subtitle">
              Complete publication support from manuscript to published paper.
            </p>
          </div>
          <div className="pub-services__grid">
            {services.map((service, i) => (
              <div key={i} className="thesis-card" id={`pub-service-${i}`}>
                <div className="thesis-card__header">
                  <div className="thesis-card__icon" style={{ background: `${service.color}12`, color: service.color }}>
                    {service.icon}
                  </div>
                  <span className="thesis-card__number">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="thesis-card__title">{service.title}</h3>
                <p className="thesis-card__desc">{service.desc}</p>
                <div className="thesis-card__bar" style={{ background: service.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDEXING PLATFORMS ===== */}
      <section className="section-alt pub-platforms" id="pub-platforms-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Globe size={14} /> Indexing Platforms
            </div>
            <h2 className="section-title">
              Featured Indexing <span>Platforms</span>
            </h2>
            <p className="section-subtitle">
              We support publication in top indexing databases worldwide.
            </p>
          </div>
          <div className="pub-platforms__grid">
            {platforms.map((platform, i) => (
              <div key={i} className="platform-card" id={`platform-card-${i}`}>
                <div className="platform-card__icon" style={{ background: `${platform.color}12`, color: platform.color }}>
                  <ExternalLink size={28} />
                </div>
                <h3 className="platform-card__name">{platform.name}</h3>
                <p className="platform-card__desc">{platform.desc}</p>
                <CheckCircle2 size={18} className="platform-card__check" color="#14c9a8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="section pub-workflow" id="pub-workflow-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} /> Publication Process
            </div>
            <h2 className="section-title">
              Publication <span>Workflow</span>
            </h2>
            <p className="section-subtitle">
              Our systematic approach ensures your research reaches the right audience.
            </p>
          </div>
          <div className="pub-workflow__grid">
            {workflow.map((step, i) => (
              <div key={i} className="pub-step" id={`pub-step-${i}`}>
                <div className="pub-step__number">{step.step}</div>
                <h3 className="pub-step__title">{step.title}</h3>
                <p className="pub-step__desc">{step.desc}</p>
                {i < workflow.length - 1 && <div className="pub-step__arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="publication-cta">
        <div className="cta__bg">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
        </div>
        <div className="container cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Publish Your Research With Confidence</h2>
            <p className="cta__text">
              Our experts guide you through every step of the publication process.
            </p>
            <Link to="/contact" className="btn btn-white btn-lg" id="publication-cta-button">
              Talk To Our Experts <Send size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
