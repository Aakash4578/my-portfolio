import React from 'react';

function FAQ() {
  return (
    <section id="faq" className="section pt-0">
      <div className="container lift">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">FAQ</h2>
          <p className="text-muted-2 mb-0">Answer questions to reduce client hesitation.</p>
        </div>

        <div className="accordion" id="faqAcc" data-aos="fade-up">
          <div className="accordion-item glass mb-3">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q1"
              >
                How fast can you deliver?
              </button>
            </h2>
            <div id="q1" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
              <div className="accordion-body text-muted-2">
                A typical single-page website can be delivered quickly, depending on content and revisions.
              </div>
            </div>
          </div>

          <div className="accordion-item glass mb-3">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q2"
              >
                Do you provide hosting & domain?
              </button>
            </h2>
            <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
              <div className="accordion-body text-muted-2">
                Yes, I can guide you for hosting/domain setup or deploy on your existing provider.
              </div>
            </div>
          </div>

          <div className="accordion-item glass">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#q3"
              >
                Can you redesign my old website?
              </button>
            </h2>
            <div id="q3" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
              <div className="accordion-body text-muted-2">
                Yes — I can redesign with modern UI, better speed, and improved conversion layout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ; 