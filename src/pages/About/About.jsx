import { motion } from 'framer-motion';
import { 
  Award, BookOpen, GraduationCap, Microscope, 
  Lightbulb, CheckCircle, FileText, BarChart, FileEdit, UserCheck, Phone, Mail, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '../../assets/student.jpg'; // Using existing asset as placeholder

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <main className="about-page" id="about-page">
      {/* ===== HERO / INTRO ===== */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="container about-hero__container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="about-hero__badge">
              <UserCheck size={16} /> Meet the Expert
            </motion.div>
            <motion.h1 variants={fadeInUp} className="about-hero__title">
              Dr. Basalingappa <span>B.G.</span>
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="about-hero__subtitle">
              FOUNDER & CEO
            </motion.h2>
            <motion.p variants={fadeInUp} className="about-hero__quote">
              "You are the CEO of your life"
            </motion.p>
            <motion.div variants={fadeInUp} className="about-hero__roles">
              <span className="about-hero__role">Research consultant</span>
              <span className="about-hero__role">Medical educator</span>
              <span className="about-hero__role">Author</span>
              <span className="about-hero__role">Innovator</span>
              <span className="about-hero__role">Academic consultant</span>
              <span className="about-hero__role">Patent Advisor</span>
            </motion.div>
            <motion.p variants={fadeInUp} className="about-hero__mission">
              Empowering researchers, healthcare professionals, and students through expert academic guidance, research support, publication assistance, and scientific innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== PROFILE & MISSION ===== */}
      <section className="profile-section">
        <div className="container">
          <div className="profile__grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
              className="profile__image-wrap"
            >
              <img src="./Dr. Basalingappa.webp" alt="Dr. Basalingappa B.G." className="profile__image" />
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="profile__content"
            >
              <motion.h2 variants={fadeInUp}>About Dr. Basalingappa</motion.h2>
              <motion.p variants={fadeInUp}>
                Dr. Basalingappa B.G. is an academic professional, researcher, educator, and author with experience in medical sciences and research guidance.
              </motion.p>
              <motion.p variants={fadeInUp}>
                He has been actively involved in teaching medical undergraduate, allied health science, and paramedical students. His work spans academic research, publication support, research methodology, scientific writing, and innovation.
              </motion.p>
              <motion.p variants={fadeInUp}>
                His mission is to help students, researchers, and healthcare professionals achieve excellence in research, publication, and academic advancement through structured guidance and professional support.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUICK ACHIEVEMENTS ===== */}
      <section className="quick-achievements-section" id="quick-achievements">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Major <span>Achievements</span></motion.h2>
          </motion.div>
          
          <motion.div 
            className="achievements-list__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Award</div>
              <h3 className="achievement-card-new__title">Young Scientist of the Year 2025</h3>
              <p className="achievement-card-new__desc">National Award on Multidisciplinary Research & Innovation by MSME, Government of India</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Doctorate</div>
              <h3 className="achievement-card-new__title">Honorary Doctorate in Medical Science</h3>
              <p className="achievement-card-new__desc">Recognized for significant contributions and excellence in medical sciences research</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Books</div>
              <h3 className="achievement-card-new__title">Author of 6 Published Books</h3>
              <p className="achievement-card-new__desc">Academic textbook writer guiding medical and healthcare graduates</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Patent</div>
              <h3 className="achievement-card-new__title">Published Patent in Innovation</h3>
              <p className="achievement-card-new__desc">Contributor to pioneering healthcare and diagnostic system designs</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Articles</div>
              <h3 className="achievement-card-new__title">4 Research Articles Published</h3>
              <p className="achievement-card-new__desc">Published in reputable International Indexed Journals</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Mentor</div>
              <h3 className="achievement-card-new__title">Medical Educator & Research Mentor</h3>
              <p className="achievement-card-new__desc">Actively teaching and guiding PG, UG, allied health, and paramedical students</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="achievement-card-new">
              <div className="achievement-card-new__badge">Global</div>
              <h3 className="achievement-card-new__title">Global Award Recipient</h3>
              <p className="achievement-card-new__desc">Honored with prestigious international accolades for academic excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== VISION, MISSION & VALUES ===== */}
      <section className="vision-mission-section" id="vision-mission">
        <div className="container">
          <div className="vision-mission__grid">
            <div className="vision-mission__statements">
              <motion.div 
                className="vision-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="vision-card__icon">
                  <Microscope size={28} />
                </div>
                <h3 className="vision-card__title">Our Vision</h3>
                <p className="vision-card__text">
                  "To be a trusted and globally recognized publication platform that advances knowledge, research excellence, and innovation."
                </p>
              </motion.div>

              <motion.div 
                className="mission-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mission-card__icon">
                  <Lightbulb size={28} />
                </div>
                <h3 className="mission-card__title">Our Mission</h3>
                <p className="mission-card__text">
                  "To publish high-quality, peer-reviewed research while fostering ethical scholarship, knowledge sharing, and academic growth for the benefit of society."
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="core-values-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="core-values__title">Our Core Values</h3>
              <div className="core-values__grid">
                {[
                  { title: 'Excellence', desc: 'Striving for the highest quality in academic research and publication.' },
                  { title: 'Integrity', desc: 'Upholding strict ethical standards, transparency, and honesty.' },
                  { title: 'Innovation', desc: 'Encouraging novel solutions, modern methodologies, and smart technologies.' },
                  { title: 'Transparency', desc: 'Clear communication, fair peer reviews, and open academic workflows.' },
                  { title: 'Collaboration', desc: 'Fostering teamwork, global networking, and interdisciplinary study.' },
                  { title: 'Academic Freedom', desc: 'Supporting independent thought, critical analysis, and open research.' },
                  { title: 'Social Responsibility', desc: 'Contributing to society by sharing knowledge that improves human lives.' },
                ].map((val, idx) => (
                  <div className="core-value-item" key={idx}>
                    <div className="core-value-item__marker" />
                    <div>
                      <h4 className="core-value-item__name">{val.title}</h4>
                      <p className="core-value-item__desc">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS TIMELINE ===== */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Academic & Professional <span>Highlights</span></h2>
          </div>
          
          <motion.div 
            className="highlights__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {/* Education */}
            <motion.div variants={fadeInUp} className="highlight-card">
              <div className="highlight-card__header">
                <div className="highlight-card__icon"><GraduationCap size={24} /></div>
                <h3 className="highlight-card__title">Medical Education & Teaching</h3>
              </div>
              <ul className="highlight-card__list">
                <li>Faculty of Medical Sciences</li>
                <li>Department of Biochemistry</li>
                <li>K.H. Patil Institute of Medical Sciences (KHPIMS), Gadag</li>
              </ul>
            </motion.div>

            {/* Research */}
            <motion.div variants={fadeInUp} className="highlight-card">
              <div className="highlight-card__header">
                <div className="highlight-card__icon"><Microscope size={24} /></div>
                <h3 className="highlight-card__title">Research & Publications</h3>
              </div>
              <ul className="highlight-card__list">
                <li>Published research articles in indexed journals</li>
                <li>Experience in medical and healthcare research</li>
                <li>Contributor to academic and scientific publications</li>
              </ul>
            </motion.div>

            {/* Author */}
            <motion.div variants={fadeInUp} className="highlight-card">
              <div className="highlight-card__header">
                <div className="highlight-card__icon"><BookOpen size={24} /></div>
                <h3 className="highlight-card__title">Published Author</h3>
              </div>
              <ul className="highlight-card__list">
                <li>Clinical Biochemistry for Medical Students</li>
                <li>Research Methodology for Medical Graduates</li>
                <li>Molecular Biology and Analytical Techniques</li>
              </ul>
            </motion.div>

            {/* Innovation */}
            <motion.div variants={fadeInUp} className="highlight-card">
              <div className="highlight-card__header">
                <div className="highlight-card__icon"><Lightbulb size={24} /></div>
                <h3 className="highlight-card__title">Innovation</h3>
              </div>
              <ul className="highlight-card__list">
                <li>Co-inventor of an AI-Based Heart Disease Checking Device</li>
                <li>Design registration certificate issued by the Intellectual Property Office, Government of India</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="awards-section">
        <div className="container">
          <motion.div 
            className="awards__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">Young Scientist of the Year</h3>
              <p className="award-item__desc">Awarded at the National Awards on Multi-Disciplinary Research and Innovation.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">Honorary Doctorate</h3>
              <p className="award-item__desc">Honorary Doctorate in Medical Science awarded by Global Human Rights Trust.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">Academic Excellence</h3>
              <p className="award-item__desc">Recognized for contributions to education, research, and innovation in medical sciences.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== PUBLISHED BOOKS ===== */}
      <section className="books-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Published <span>Books</span></h2>
          </div>
          
          <motion.div 
            className="books__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="book-card">
              <div className="book-card__icon"><BookOpen size={28} /></div>
              <h3 className="book-card__title">Clinical Biochemistry for Medical Students</h3>
              <p className="book-card__desc">A student-focused guide designed to simplify complex biochemical concepts through practical and clinical applications.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="book-card">
              <div className="book-card__icon"><BookOpen size={28} /></div>
              <h3 className="book-card__title">Research Methodology for Medical Graduates</h3>
              <p className="book-card__desc">A comprehensive resource covering research design, data collection, analysis, publication processes, and academic writing.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="book-card">
              <div className="book-card__icon"><BookOpen size={28} /></div>
              <h3 className="book-card__title">Molecular Biology and Analytical Techniques</h3>
              <p className="book-card__desc">Focused on competency-based learning, clinical correlation, analytical methods, and examination preparation.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="book-card">
              <div className="book-card__icon"><BookOpen size={28} /></div>
              <h3 className="book-card__title">Molecular Symphony: Unveiling Biochemical Wonders</h3>
              <p className="book-card__desc">An exploration into the biochemical wonders and molecular mechanisms of life.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="book-card">
              <div className="book-card__icon"><BookOpen size={28} /></div>
              <h3 className="book-card__title">Text-Book of Medical Biochemistry for MBBS Students</h3>
              <p className="book-card__desc">1st Edition hand-made textbook tailored as per the new NMC CBME guidelines.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== RESEARCH SERVICES ===== */}
      <section className="about-services-section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Research & Academic <span>Services</span></h2>
          </div>
          
          <motion.div 
            className="about-services__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="about-service-item">
              <FileText size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Thesis & Dissertation Support</h3>
                <p>Guidance for postgraduate and doctoral research projects.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="about-service-item">
              <FileEdit size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Research Paper Assistance</h3>
                <p>Support for manuscript preparation, formatting, and submission.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="about-service-item">
              <BookOpen size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Journal Publication Guidance</h3>
                <p>Assistance in selecting suitable journals and navigating publication workflows.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="about-service-item">
              <BarChart size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Data Analysis</h3>
                <p>Research data interpretation and statistical support.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="about-service-item">
              <CheckCircle size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Manuscript Editing</h3>
                <p>Professional editing, proofreading, and formatting services.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="about-service-item">
              <UserCheck size={28} className="about-service-item__icon" />
              <div className="about-service-item__content">
                <h3>Research Consultation</h3>
                <p>Personalized guidance for students, researchers, and healthcare professionals.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US & ACHIEVEMENTS ===== */}
      <section className="about-lists-section">
        <div className="container">
          <div className="lists__grid">
            
            <motion.div 
              className="list-block"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp}>Why Choose Us</motion.h3>
              <div className="feature-list">
                <motion.div variants={fadeInUp} className="feature-item">
                  <CheckCircle size={20} className="feature-item__icon" />
                  <div className="feature-item__text">
                    <h4>Academic Expertise</h4>
                    <p>Strong background in medical education and research.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="feature-item">
                  <CheckCircle size={20} className="feature-item__icon" />
                  <div className="feature-item__text">
                    <h4>Research-Oriented Approach</h4>
                    <p>Focused on scientific accuracy and quality outcomes.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="feature-item">
                  <CheckCircle size={20} className="feature-item__icon" />
                  <div className="feature-item__text">
                    <h4>Professional Guidance</h4>
                    <p>End-to-end support throughout the research journey.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="feature-item">
                  <CheckCircle size={20} className="feature-item__icon" />
                  <div className="feature-item__text">
                    <h4>Confidentiality</h4>
                    <p>Respect for client privacy and research integrity.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="feature-item">
                  <CheckCircle size={20} className="feature-item__icon" />
                  <div className="feature-item__text">
                    <h4>Timely Assistance</h4>
                    <p>Structured workflows and responsive communication.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="list-block"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp}>Achievements</motion.h3>
              <div className="achievement-tags">
                <motion.span variants={fadeInUp} className="achievement-tag">Young Scientist Award Recipient</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Honorary Doctorate</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Published Author</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Medical Educator</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Research Mentor</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Patent/Design Registration Contributor</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Conference Participant</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Academic Research Consultant</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Workshop Participant</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Journal Club Participant</motion.span>
                <motion.span variants={fadeInUp} className="achievement-tag">Workshop and Journal Club</motion.span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== GLOBAL AWARDS ===== */}
      <section className="awards-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Global <span>Awards</span></h2>
          </div>
          
          <motion.div 
            className="awards__grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">UNITED STATES GLOBAL MERIT RECORD</h3>
            </motion.div>
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">THE 2026 GLOBAL ICON AWARD</h3>
            </motion.div>
            <motion.div variants={fadeInUp} className="award-item">
              <Award size={48} className="award-item__icon" />
              <h3 className="award-item__title">PADMA SHREE GLOBAL EXCELLENCE AWARD 2026</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="about-cta__title">Get Professional Research Support</motion.h2>
            <motion.p variants={fadeInUp} className="about-cta__text">
              Whether you are working on a thesis, dissertation, research paper, publication, or academic project, our team is ready to assist you.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="about-cta__contact">
              <div className="contact-pill"><Phone size={18} color="var(--primary-600)" /> 7899193404</div>
              <div className="contact-pill"><Mail size={18} color="var(--primary-600)" /> basalingappa1987@gmail.com</div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Research Journey Today <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
