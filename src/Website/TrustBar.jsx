import React from 'react';

function TrustBar() {
  return (
    <section className="py-4">
      <div className="container lift">
        <div className="glass p-3 p-md-4" data-aos="fade-up">
          
          <div className="row g-3 align-items-center text-center text-md-start">
            
            <div className="col-md-4 fw-bold">
              Trusted for modern websites & web apps
            </div>

            <div className="col-md-8">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                
                <span className="pill">
                  <i className="bi bi-stars"></i> Premium UI
                </span>

                <span className="pill">
                  <i className="bi bi-code-slash"></i> Clean Code
                </span>

                <span className="pill">
                  <i className="bi bi-rocket-takeoff"></i> Fast Launch
                </span>

                <span className="pill">
                  <i className="bi bi-headset"></i> Support
                </span>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustBar;