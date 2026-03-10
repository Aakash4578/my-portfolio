import React from 'react';

function BigCta() {
  return (
    <section className="py-5">
      <div className="container lift" data-aos="zoom-in">
        <div className="glass p-4 p-md-5">
          <div className="row g-3 align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-2">Ready to build a premium website for your company?</h3>
              <p className="text-muted-2 mb-0">Send your requirements — I’ll respond with a clear plan & quote.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-brand btn-modern btn-lg px-4">
                Start Now <i className="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigCta;