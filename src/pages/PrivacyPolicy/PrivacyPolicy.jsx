import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your personal information.</p>
        </div>
      </div>
      <div className="container privacy-content">
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>At MedResearch Pro, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        </section>

        <section className="privacy-section">
          <h2>2. The Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, title, etc.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Research Data:</strong> materials, data sets, and information provided for thesis and publication services.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing medical thesis assistance).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>To manage payments, fees and charges.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
        </section>

        <section className="privacy-section">
          <h2>5. Data Retention</h2>
          <p>We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.</p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and to withdraw consent.</p>
        </section>
        
        <section className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at basalingappa1987@gmail.com.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
