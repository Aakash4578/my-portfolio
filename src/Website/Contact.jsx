import React from 'react';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks! Connect this form to your backend or Formspree.');
  };

  return (
    <section id="contact" className="section">
      <div className="container lift">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5" data-aos="fade-up">
            <div className="glass p-4 p-md-5 h-100">
              <h2 className="section-title mb-3">Contact</h2>
              <p className="text-muted-2 mb-4">
                Tell me about your project — website, MERN app, PHP work, or React UI.
              </p>

              <div className="d-flex gap-3 mb-3">
                <div className="icon"><i className="bi bi-envelope"></i></div>
                <div>
                  <div className="small text-muted-2">Email</div>
                  <div className="fw-semibold">yourmail@example.com</div>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <div className="icon"><i className="bi bi-telephone"></i></div>
                <div>
                  <div className="small text-muted-2">Phone</div>
                  <div className="fw-semibold">+00 000 0000000</div>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <div>
                  <div className="small text-muted-2">Location</div>
                  <div className="fw-semibold">Your City, Country</div>
                </div>
              </div>

              <hr className="my-4" style={{ borderColor: 'var(--stroke)' }} />

              <div className="d-flex gap-2">
                <a className="btn btn-outline-modern btn-modern btn-sm" href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className="btn btn-outline-modern btn-modern btn-sm" href="#" aria-label="GitHub"><i className="bi bi-github"></i></a>
                <a className="btn btn-outline-modern btn-modern btn-sm" href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="80">
            <div className="glass p-4 p-md-5 h-100">
              <h4 className="fw-bold mb-3">Send a Message</h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input className="form-control" type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input className="form-control" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Service</label>
                    <select className="form-select" required>
                      <option value="" disabled>Select a service</option>
                      <option>Website / Landing Page</option>
                      <option>MERN Stack App</option>
                      <option>Full Stack Development</option>
                      <option>PHP Development</option>
                      <option>React JS UI</option>
                      <option>Maintenance</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Tell me about your project..." required />
                  </div>

                  <div className="col-12 d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <button className="btn btn-brand btn-modern btn-lg px-4" type="submit">
                      Send Message <i className="bi bi-send ms-1"></i>
                    </button>
                    <span className="small text-muted-2">© <span id="yr">{new Date().getFullYear()}</span> Aakash. All rights reserved.</span>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;