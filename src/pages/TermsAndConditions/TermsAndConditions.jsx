import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-header">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p>Please read these terms and conditions carefully before using our services.</p>
        </div>
      </div>
      <div className="container terms-content">
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to MedResearch Pro. By accessing or using our services, you agree to be bound by these terms and conditions.</p>
        </section>

        <section className="terms-section">
          <h2>2. Services Provided</h2>
          <p>We provide medical thesis assistance, data analysis, biostatistics support, research paper writing, and publication support services.</p>
        </section>

        <section className="terms-section">
          <h2>3. Payment Terms</h2>
          <p>Our payment terms are structured to ensure commitment and fair compensation for our services:</p>
          <ul>
            <li><strong>Advance Payment:</strong> A 50% advance payment is required to initiate any service or project.</li>
            <li><strong>Final Payment:</strong> The remaining 50% payment is due upon the acceptance and completion of the work.</li>
          </ul>
          <p>All payments must be made through our designated payment methods. Failure to clear dues may result in suspension of services.</p>
        </section>

        <section className="terms-section">
          <h2>4. Client Responsibilities</h2>
          <p>Clients are expected to provide accurate and complete data and information necessary for the execution of the requested services. Timely feedback is crucial for adhering to project timelines.</p>
        </section>

        <section className="terms-section">
          <h2>5. Confidentiality</h2>
          <p>We strictly maintain the confidentiality of all client data, research materials, and personal information. None of your data will be shared with third parties without your explicit consent.</p>
        </section>

        <section className="terms-section">
          <h2>6. Revisions and Modifications</h2>
          <p>We offer revisions based on the initial scope of work. Any significant changes or additions outside the agreed-upon scope may incur additional charges.</p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at basalingappa1987@gmail.com.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
