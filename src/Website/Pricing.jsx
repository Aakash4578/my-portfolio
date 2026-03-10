import React from 'react';

function Pricing() {
  return (
    // PRICING
    <section id="pricing" className="section pt-0">
      <div className="container lift">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Pricing</h2>
          <p className="text-muted-2 mb-0">Clear packages make clients decide faster.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card-modern p-4">
              <h5 className="fw-bold mb-1">Starter</h5>
              <div className="text-muted-2 mb-3">Best for personal or small business</div>
              <div className="display-6 fw-bold mb-3">$199</div>
              <ul className="text-muted-2">
                <li>1-page website</li>
                <li>Responsive design</li>
                <li>Basic SEO</li>
                <li>Contact form</li>
              </ul>
              <a href="#contact" className="btn btn-outline-modern btn-modern w-100">Choose Starter</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="70">
            <div className="card-modern p-4 price-featured">
              <div className="ribbon">Most Popular</div>
              <h5 className="fw-bold mb-1">Business</h5>
              <div className="text-muted-2 mb-3">Best for companies & agencies</div>
              <div className="display-6 fw-bold mb-3">$499</div>
              <ul className="text-muted-2">
                <li>Multi-section funnel website</li>
                <li>Premium UI + animations</li>
                <li>Portfolio + testimonials</li>
                <li>Speed optimization</li>
              </ul>
              <a href="#contact" className="btn btn-brand btn-modern w-100">Choose Business</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="140">
            <div className="card-modern p-4">
              <h5 className="fw-bold mb-1">Pro</h5>
              <div className="text-muted-2 mb-3">Best for web apps / dashboards</div>
              <div className="display-6 fw-bold mb-3">$999</div>
              <ul className="text-muted-2">
                <li>MERN / Full-stack</li>
                <li>Auth + admin panel</li>
                <li>APIs + database</li>
                <li>Deployment support</li>
              </ul>
              <a href="#contact" className="btn btn-outline-modern btn-modern w-100">Choose Pro</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;