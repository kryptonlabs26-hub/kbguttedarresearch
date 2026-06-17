import { Link } from 'react-router-dom';
import {
  Lightbulb, FileText, BookOpen, Table2, BarChart3, Calculator,
  PenTool, Palette, Presentation, ShieldCheck, ArrowRight, Send,
  Sparkles, Clock, CheckCircle2, ChevronRight, GraduationCap
} from 'lucide-react';
import './ThesisServices.css';

const services = [
  { icon: <Lightbulb size={26} />, title: 'Topic Selection', desc: 'Assistance in selecting innovative, feasible, and institution-approved research topics.', color: '#f59e0b' },
  { icon: <FileText size={26} />, title: 'Synopsis Preparation', desc: 'Professional synopsis development according to university and institutional guidelines.', color: '#0e74b8' },
  { icon: <BookOpen size={26} />, title: 'Review of Literature', desc: 'Evidence-based and structured literature review preparation.', color: '#14c9a8' },
  { icon: <Table2 size={26} />, title: 'Master Chart Preparation', desc: 'Organized data collection sheets and master chart creation.', color: '#8b5cf6' },
  { icon: <BarChart3 size={26} />, title: 'Data Analysis', desc: 'Comprehensive statistical analysis and interpretation of research data.', color: '#ef4444' },
  { icon: <Calculator size={26} />, title: 'Biostatistics Support', desc: 'Expert guidance for selecting and applying appropriate statistical methods.', color: '#06b6d4' },
  { icon: <PenTool size={26} />, title: 'Discussion & Conclusion', desc: 'Professional interpretation of results and scientific discussion development.', color: '#ec4899' },
  { icon: <Palette size={26} />, title: 'Graphical Abstract Design', desc: 'Visually engaging graphical summaries of research findings.', color: '#f97316' },
  { icon: <Presentation size={26} />, title: 'PPT Preparation', desc: 'Professional thesis defense and viva presentation support.', color: '#6366f1' },
  { icon: <ShieldCheck size={26} />, title: 'Plagiarism Verification', desc: 'Comprehensive originality checks and plagiarism reduction support.', color: '#22c55e' },
  { icon: <GraduationCap size={26} />, title: 'PhD Degree Support', desc: 'PhD admission to Complete Doctoral Degree support.', color: '#8b5cf6' },
];

const timeline = [
  { phase: 'Review of Literature', duration: '5-7 Days', icon: <BookOpen size={20} /> },
  { phase: 'Results Analysis', duration: '2 Days', icon: <BarChart3 size={20} /> },
  { phase: 'Discussion & Corrections', duration: '3-5 Days', icon: <PenTool size={20} /> },
];

export default function ThesisServices() {
  return (
    <main className="thesis" id="thesis-page">
      {/* ===== HERO ===== */}
      <section className="page-hero" id="thesis-hero">
        <div className="page-hero__bg">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
          <div className="page-hero__grid-pattern" />
        </div>
        <div className="container page-hero__container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Thesis Services</span>
          </div>
          <div className="page-hero__content">
            <div className="section-badge">
              <Sparkles size={14} /> Thesis Services
            </div>
            <h1 className="page-hero__title">
              Medical Thesis <span>Assistance</span>
            </h1>
            <p className="page-hero__subtitle">
              Comprehensive support from topic selection to final thesis submission.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg" id="thesis-hero-cta">
              Get Expert Assistance <ArrowRight size={18} />
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
      <section className="section thesis-services" id="thesis-services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} /> What We Offer
            </div>
            <h2 className="section-title">
              Services We <span>Offer</span>
            </h2>
            <p className="section-subtitle">
              End-to-end thesis support tailored to your university requirements.
            </p>
          </div>
          <div className="thesis-services__grid">
            {services.map((service, i) => (
              <div key={i} className="thesis-card" id={`thesis-service-${i}`}>
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

      {/* ===== TIMELINE ===== */}
      <section className="section-alt thesis-timeline" id="thesis-timeline-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Clock size={14} /> Delivery Timeline
            </div>
            <h2 className="section-title">
              Delivery <span>Timeline</span>
            </h2>
            <p className="section-subtitle">
              Efficient turnaround times without compromising quality.
            </p>
          </div>
          <div className="thesis-timeline__cards">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-card" id={`timeline-card-${i}`}>
                <div className="timeline-card__icon">
                  {item.icon}
                </div>
                <h3 className="timeline-card__phase">{item.phase}</h3>
                <div className="timeline-card__duration">
                  <Clock size={16} />
                  <span>{item.duration}</span>
                </div>
                <CheckCircle2 size={20} className="timeline-card__check" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="thesis-cta">
        <div className="cta__bg">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
        </div>
        <div className="container cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Ready To Start Your Thesis?</h2>
            <p className="cta__text">
              Get expert assistance for your medical thesis from experienced academic writers.
            </p>
            <Link to="/contact" className="btn btn-white btn-lg" id="thesis-cta-button">
              Get Expert Assistance <Send size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
