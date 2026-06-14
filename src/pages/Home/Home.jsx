import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen, Users, BarChart3, Shield,
  Clock, Lock, CheckCircle2, Award, Headphones, Send,
  ArrowRight, ChevronRight, Star, Sparkles, GraduationCap, FileText,
  TrendingUp
} from 'lucide-react';
import './Home.css';
import studentImg from '../../assets/student.jpg';
import heroResearchImg from '../../assets/hero_research.png';
import thesisImg from '../../assets/thesis.jpg';
import researchImg from '../../assets/research.png';
import journalImg from '../../assets/journal.jpg';

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── CountUp component ── */
function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const t0 = Date.now();
    const id = setInterval(() => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * end));
      if (p >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── data ── */
const services = [
  {
    image: thesisImg,
    tag: 'Thesis Writing Support',
    title: 'Medical Thesis Assistance',
    subdesc: 'Comprehensive guidance for MD, MS, DNB, and MCh scholars.',
    desc: 'Support from topic selection to final thesis submission, ensuring academic compliance.',
    link: '/thesis-services',
    color: '#0e74b8',
    icon: <GraduationCap size={22} />,
    metrics: [
      { val: '100%', lbl: 'Plagiarism-Free' },
      { val: '1-on-1', lbl: 'Expert Mentorship' },
      { val: 'All Dev', lbl: 'Timeline Support' },
    ],
  },
  {
    image: researchImg,
    tag: 'Manuscript Preparation',
    title: 'Research Publications',
    subdesc: 'Convert clinical research and findings into publishable manuscripts.',
    desc: 'Transform raw medical research into high-quality, structured drafts for peer review.',
    link: '/publication-services',
    color: '#14c9a8',
    icon: <FileText size={22} />,
    metrics: [
      { val: 'SCOPUS', lbl: 'Indexed Journals' },
      { val: '10+', lbl: 'Medical Fields' },
      { val: 'Peer', lbl: 'Reviewed Focus' },
    ],
  },
  {
    image: journalImg,
    tag: 'Indexed Submission Support',
    title: 'Journal Submission Support',
    subdesc: 'End-to-end assistance from journal selection to final response.',
    desc: 'Expert selection and matching of submission formatting to indexed medical journals.',
    link: '/publication-services',
    color: '#6366f1',
    icon: <BookOpen size={22} />,
    metrics: [
      { val: '98%', lbl: 'Acceptance Rate' },
      { val: 'Fast', lbl: 'Peer Response' },
      { val: 'All', lbl: 'Major Publishers' },
    ],
  },
];

const statsData = [
  { value: 500, suffix: '+', label: 'Medical Scholars', icon: <GraduationCap size={28} /> },
  { value: 98, suffix: '%', label: 'Acceptance Rate', icon: <TrendingUp size={28} /> },
  { value: 10, suffix: '+', label: 'Years Experience', icon: <Award size={28} /> },
  { value: 50, suffix: '+', label: 'Publications Done', icon: <BookOpen size={28} /> },
];

const whyChoose = [
  { icon: <Users size={24} />, label: 'Dedicated Medical Writers', desc: 'Subject-matter experts for every discipline' },
  { icon: <BarChart3 size={24} />, label: 'Expert Biostatisticians', desc: 'Accurate data analysis & interpretation' },
  { icon: <Award size={24} />, label: 'High Quality Research', desc: 'Rigorous quality at every stage' },
  { icon: <Clock size={24} />, label: 'On-Time Delivery', desc: 'Meet every deadline, guaranteed' },
  { icon: <Lock size={24} />, label: 'Complete Confidentiality', desc: 'Your research stays secure & private' },
  { icon: <Headphones size={24} />, label: 'Publication Assistance', desc: 'Full support through peer review' },
  { icon: <Shield size={24} />, label: 'Plagiarism Verification', desc: 'Thorough originality checks included' },
  { icon: <CheckCircle2 size={24} />, label: 'End-to-End Support', desc: 'From concept to final submission' },
];

const workflow = [
  { step: '01', title: 'Consultation', desc: 'Discuss your research goals, timelines, and specific requirements with our expert team.', icon: <Headphones size={22} /> },
  { step: '02', title: 'Research Planning', desc: 'Develop a structured research strategy with clear milestones and methodology.', icon: <FileText size={22} /> },
  { step: '03', title: 'Writing & Analysis', desc: 'Expert content creation, statistical analysis, and manuscript development.', icon: <BarChart3 size={22} /> },
  { step: '04', title: 'Review & Corrections', desc: 'Thorough quality review, plagiarism checks, and iterative refinements.', icon: <CheckCircle2 size={22} /> },
  { step: '05', title: 'Final Delivery', desc: 'Polished, submission-ready deliverables with publication support.', icon: <Send size={22} /> },
];

export default function Home() {
  return (
    <main className="home" id="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid-dots" />
        </div>

        <div className="container hero__container">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="hero__badge">
              <Sparkles size={14} />
              Trusted by 500+ Medical Scholars
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero__title">
              Transform Your Medical Research Into{' '}
              <span className="hero__title-highlight">Academic Success</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero__subtitle">
              Expert support for MD, Phd, MS, DNB, DrNB and MCh scholars in Thesis Writing,
              Data Analysis, Research Publications and Journal Submissions.
            </motion.p>
            <motion.div variants={fadeUp} className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                Get Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/thesis-services" className="btn btn-outline btn-lg" id="hero-cta-secondary">
                Explore Services <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero__image-card">
              <img src={heroResearchImg} alt="Medical Researchers Collaborating" className="hero__image" />
              <div className="hero__image-shine" />
            </div>
            <motion.div
              className="hero__float-card hero__float-card--1"
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="hero__float-icon">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <span className="hero__float-val">500+</span>
                <span className="hero__float-lbl">Scholars Assisted</span>
              </div>
            </motion.div>
            <motion.div
              className="hero__float-card hero__float-card--2"
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="hero__float-icon hero__float-icon--accent">
                <Star size={18} />
              </div>
              <div>
                <span className="hero__float-val">98%</span>
                <span className="hero__float-lbl">Success Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__features-bar"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="container hero__features-inner">
            <div className="hero__feat">
              <div className="hero__feat-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="hero__feat-title">Thesis Writing</h3>
                <p className="hero__feat-desc">End-to-end thesis support</p>
              </div>
            </div>
            <div className="hero__feat-divider" />
            <div className="hero__feat">
              <div className="hero__feat-icon">
                <BarChart3 size={22} />
              </div>
              <div>
                <h3 className="hero__feat-title">Data Analysis</h3>
                <p className="hero__feat-desc">Accurate & reliable results</p>
              </div>
            </div>
            <div className="hero__feat-divider" />
            <div className="hero__feat">
              <div className="hero__feat-icon">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="hero__feat-title">Publication Support</h3>
                <p className="hero__feat-desc">From draft to publication</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <section className="stats" id="stats-section">
        <div className="stats__bg">
          <div className="stats__orb stats__orb--1" />
          <div className="stats__orb stats__orb--2" />
        </div>
        <div className="container">
          <motion.div
            className="stats__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {statsData.map((s, i) => (
              <motion.div key={i} className="stat-card" variants={fadeUp} id={`stat-card-${i}`}>
                <div className="stat-card__icon">{s.icon}</div>
                <div className="stat-card__value">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-card__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about" id="about-section">
        <div className="container">
          <div className="about__grid">
            <motion.div
              className="about__visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeLeft}
            >
              <div className="about__deco-ring" />
              <div className="about__image-card">
                <img src={studentImg} alt="Medical Graduate Scholar" className="about__image" />
                <div className="about__image-overlay" />
              </div>
              <motion.div
                className="about__exp-badge"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              >
                <span className="about__exp-number">10+</span>
                <span className="about__exp-text">Years Experience</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="about__content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="section-badge">
                <Star size={14} /> About Us
              </motion.div>
              <motion.h2 variants={fadeUp} className="section-title">
                Your Trusted <span>Research Partner</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="about__text">
                We provide end-to-end support for medical students, researchers, and healthcare
                professionals throughout their academic and publication journey. From thesis
                preparation and statistical analysis to manuscript development and journal
                publication support, our team helps transform research into meaningful academic
                achievements.
              </motion.p>
              <motion.div
                className="about__highlights"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerFast}
              >
                {[
                  'Expert Medical Writers & Researchers',
                  'Comprehensive Statistical Analysis',
                  'Indexed Journal Publication Support',
                  '100% Original & Plagiarism-Free Work',
                ].map((text, i) => (
                  <motion.div key={i} variants={fadeUp} className="about__highlight">
                    <CheckCircle2 size={18} color="#14c9a8" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/about" className="btn btn-primary" id="about-cta">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services" id="services-section">
        <div className="services__deco-circle" />
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="section-badge">
              <BookOpen size={14} /> Our Services
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title">
              Our Academic <span>Research Services</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Comprehensive guidance and support tailored for medical professionals and scholars.
            </motion.p>
          </motion.div>

          <motion.div
            className="services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  to={service.link}
                  className="service-card"
                  id={`service-card-${i}`}
                  style={{
                    '--service-color': service.color,
                    '--service-color-light': `${service.color}12`,
                    '--service-color-glow': `${service.color}20`,
                  }}
                >
                  <div className="service-card__image-wrap">
                    <img src={service.image} alt={service.title} className="service-card__image" />
                    <div className="service-card__image-overlay" />
                    <span className="service-card__tag">{service.tag}</span>
                    <div className="service-card__icon-badge">{service.icon}</div>
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__desc">{service.subdesc}</p>
                    <p className="service-card__long-desc">{service.desc}</p>
                    <div className="service-card__metrics">
                      {service.metrics.map((m, j) => (
                        <div className="service-card__metric" key={j}>
                          <span className="service-card__metric-val">{m.val}</span>
                          <span className="service-card__metric-lbl">{m.lbl}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-card__footer">
                      <span className="service-card__action">
                        Explore Service <ArrowRight size={16} className="service-card__arrow" />
                      </span>
                    </div>
                  </div>
                  <div className="service-card__glow" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-choose" id="why-choose-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="section-badge">
              <Award size={14} /> Why Choose Us
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title">
              What Makes Us <span>Different</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              We combine academic expertise with a commitment to excellence.
            </motion.p>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                className={`bento-card ${[0, 4, 6, 7].includes(i) ? 'bento-card--wide' : ''}`}
                variants={fadeUp}
                id={`why-card-${i}`}
              >
                <div className="bento-card__icon">{item.icon}</div>
                <div className="bento-card__text">
                  <h4 className="bento-card__label">{item.label}</h4>
                  <p className="bento-card__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="section-alt workflow" id="workflow-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="section-badge">
              <Sparkles size={14} /> Our Process
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title">
              How We <span>Work</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              A streamlined process designed for efficiency and quality.
            </motion.p>
          </motion.div>

          <div className="timeline">
            <div className="timeline__line" />
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                className={`timeline-step ${i % 2 === 0 ? 'timeline-step--left' : 'timeline-step--right'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                id={`workflow-step-${i}`}
              >
                <div className="timeline-step__number">{step.step}</div>
                <div className="timeline-step__card">
                  <div className="timeline-step__icon">{step.icon}</div>
                  <h3 className="timeline-step__title">{step.title}</h3>
                  <p className="timeline-step__desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="cta-section">
        <div className="cta__bg">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
          <div className="cta__circle cta__circle--1" />
          <div className="cta__circle cta__circle--2" />
          <div className="cta__circle cta__circle--3" />
        </div>
        <div className="container cta__container">
          <motion.div
            className="cta__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="cta__title">
              Ready to Accelerate Your Research?
            </motion.h2>
            <motion.p variants={fadeUp} className="cta__text">
              Let's discuss your academic and publication requirements. Get expert guidance today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="btn btn-white btn-lg cta__btn" id="cta-button">
                Get Started <Send size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}