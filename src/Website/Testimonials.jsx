import React from 'react';

function Testimonials() {
  return (
    // TESTIMONIALS
    <section className="section pt-0">
      <div className="container lift">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Testimonials</h2>
          <p className="text-muted-2 mb-0">Social proof increases trust and conversions.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card-modern p-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
              </div>
              <p className="mb-3">
                “Aakash delivered a premium website fast. Design looks agency-level and performance is excellent.”
              </p>
              <div className="text-muted-2 small"><b>Client A</b> • Business Owner</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="60">
            <div className="card-modern p-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
              </div>
              <p className="mb-3">
                “Great communication, clean code, and the UI looks very professional. Highly recommended.”
              </p>
              <div className="text-muted-2 small"><b>Client B</b> • Startup Founder</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="120">
            <div className="card-modern p-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'var(--brand4)' }}></i>
              </div>
              <p className="mb-3">
                “Our website conversion improved after the redesign. Very smooth process and on-time delivery.”
              </p>
              <div className="text-muted-2 small"><b>Client C</b> • Marketing Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;