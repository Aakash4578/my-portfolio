import React from 'react';

function HeroSection() {
  return (
    <header id="home" className="hero">
      <div className="container lift">
        <div className="row align-items-center g-4">
          
          <div className="col-lg-7">
            
            <div className="kicker mb-3" data-aos="fade-up">
              <i className="bi bi-stars"></i>
              <span>Professional Developer • Agency Style • Conversion Focused</span>
            </div>

            <h1 
              className="display-5 fw-bold lh-sm mb-3" 
              data-aos="fade-up" 
              data-aos-delay="70"
            >
              I’m <span className="grad">Aakash</span> — I build premium websites & scalable web apps.
            </h1>

            <p 
              className="lead text-muted-2 mb-4" 
              data-aos="fade-up" 
              data-aos-delay="120"
            >
              High-end UI, fast performance, and clean architecture using
              <b> MERN Stack</b>, <b> Full-Stack</b>, <b> PHP</b>, and <b> React JS</b>.
            </p>

            <div 
              className="d-flex flex-wrap gap-2 mb-4" 
              data-aos="fade-up" 
              data-aos-delay="160"
            >
              <span className="pill"><i className="bi bi-lightning-charge"></i> Fast Delivery</span>
              <span className="pill"><i className="bi bi-phone"></i> Responsive</span>
              <span className="pill"><i className="bi bi-graph-up"></i> SEO Ready</span>
              <span className="pill"><i className="bi bi-shield-check"></i> Secure</span>
            </div>

            <div 
              className="d-flex flex-wrap gap-3" 
              data-aos="fade-up" 
              data-aos-delay="210"
            >
              <a href="#portfolio" className="btn btn-brand btn-modern btn-lg px-4">
                View Portfolio <i className="bi bi-arrow-right ms-1"></i>
              </a>

              <a href="#services" className="btn btn-outline-modern btn-modern btn-lg px-4">
                Explore Services
              </a>
            </div>

          </div>

          {/* Right Side Card */}
          <div className="col-lg-5">
            <div 
              className="glass p-4 p-md-5" 
              data-aos="zoom-in" 
              data-aos-delay="120"
            >
              <h5 className="fw-bold mb-3">Quick Offer </h5>

              <p className="text-muted-2 mb-3">
                Get a modern website that looks premium and converts visitors into customers.
              </p>

              <div className="d-flex gap-3 mb-3">
                <div className="icon"><i className="bi bi-check2-circle"></i></div>
                <div>
                  <div className="fw-semibold">Free Project Consultation</div>
                  <div className="small text-muted-2">Clear roadmap + timeline + cost estimate.</div>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <div className="icon"><i className="bi bi-speedometer2"></i></div>
                <div>
                  <div className="fw-semibold">Performance Optimization</div>
                  <div className="small text-muted-2">Speed + Core Web Vitals friendly builds.</div>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-palette"></i></div>
                <div>
                  <div className="fw-semibold">Modern Agency UI</div>
                  <div className="small text-muted-2">Clean, premium & high-trust design.</div>
                </div>
              </div>

              <hr className="my-4" style={{ borderColor: "var(--stroke)" }} />

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="small text-muted-2">Email</div>
                  <div className="fw-semibold">akashwaghella.com</div>
                </div>

                <a className="btn btn-outline-modern btn-modern btn-sm" href="#contact">
                  Contact
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeroSection;