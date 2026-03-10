import React from 'react';

function Process() {
  return (
    <section id="process" className="section pt-0">
      <div className="container lift">

        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">My Process</h2>
          <p className="text-muted-2 mb-0">
            Simple, professional workflow — fast delivery without compromise.
          </p>
        </div>

        {/* Process Cards */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-chat-dots"></i></div>
                <div>
                  <div className="fw-bold mb-1">1) Discovery</div>
                  <div className="text-muted-2 small">
                    Goals, audience, competitors, and requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="60">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-bezier2"></i></div>
                <div>
                  <div className="fw-bold mb-1">2) UI/UX Design</div>
                  <div className="text-muted-2 small">
                    Premium layout, typography, and conversion flow.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="120">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-code-slash"></i></div>
                <div>
                  <div className="fw-bold mb-1">3) Development</div>
                  <div className="text-muted-2 small">
                    Clean code, responsive, fast, scalable.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="180">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-rocket-takeoff"></i></div>
                <div>
                  <div className="fw-bold mb-1">4) Launch</div>
                  <div className="text-muted-2 small">
                    Testing, SEO setup, deployment, support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Mini */}
        <div className="mt-5" data-aos="fade-up">
          <div className="glass p-4 p-md-5">
            <div className="row g-3 align-items-center">
              <div className="col-lg-8">
                <h4 className="fw-bold mb-2">
                  Want a premium website for your company?
                </h4>
                <p className="text-muted-2 mb-0">
                  Message me your goals — I’ll reply with a plan and pricing.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a href="#contact" className="btn btn-brand btn-modern btn-lg px-4">
                  Get a Quote <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;