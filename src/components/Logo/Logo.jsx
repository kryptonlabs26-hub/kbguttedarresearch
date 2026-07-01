import './Logo.css';

export default function Logo({ className = '' }) {
  return (
    <div className={`custom-logo ${className}`}>
      <div className="custom-logo__main">
        <span className="custom-logo__kb">K.B.</span>
        <span className="custom-logo__guttedar">GUTTEDAR</span>
      </div>
      <div className="custom-logo__research-wrapper">
        <div className="custom-logo__line custom-logo__line--left">
          <div className="custom-logo__dot custom-logo__dot--left"></div>
        </div>
        <span className="custom-logo__research">SCIENTIFIC RESEARCH PUBLICATIONS</span>
        <div className="custom-logo__line custom-logo__line--right">
          <div className="custom-logo__dot custom-logo__dot--right"></div>
        </div>
      </div>
    </div>
  );
}
