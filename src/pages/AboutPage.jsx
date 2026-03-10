import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const highlights = [
    {
      title: "Modern Frontend",
      desc: "Clean, scalable and responsive interfaces built with modern React-based architecture.",
      icon: "bi bi-window-stack",
    },
    {
      title: "Performance Driven",
      desc: "Fast-loading pages, optimized structure, and a smoother user experience across devices.",
      icon: "bi bi-lightning-charge",
    },
    {
      title: "Business Focused",
      desc: "Web experiences designed to build trust, improve conversions, and support business growth.",
      icon: "bi bi-graph-up-arrow",
    },
    {
      title: "Premium UI Taste",
      desc: "Attention to spacing, typography, layout, and visual balance for a refined digital presence.",
      icon: "bi bi-stars",
    },
  ];

  const stats = [
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "Responsive Approach" },
    { value: "Fast", label: "Performance Mindset" },
    { value: "Modern", label: "Design Direction" },
  ];

  return (
    <section className="section about-premium-page">
      <div className="container">
        {/* HERO */}
        <div className="about-hero-premium card-modern overflow-hidden mb-5" data-aos="fade-up">
          <div className="row g-0 align-items-center">
            <div className="col-lg-7">
              <div className="p-4 p-md-5 p-lg-6">
                <span className="about-badge-premium mb-3 d-inline-flex">
                  About Me
                </span>

                <h1 className="about-title-premium mb-4">
                  I build premium web experiences that feel modern, fast, and built to impress.
                </h1>

                <p className="about-lead-premium mb-3">
                  I am a frontend developer focused on creating websites that combine
                  visual quality, performance, and business value. My goal is to build
                  interfaces that not only look professional, but also create trust and
                  help brands stand out online.
                </p>

                <p className="about-text-premium mb-4">
                  From portfolio websites to business landing pages, I focus on clean code,
                  polished design, responsive layouts, and a stronger digital presence that
                  supports long-term growth.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="btn btn-brand btn-modern px-4 py-2">
                    Let’s Work Together
                  </Link>

                  <Link to="/blog" className="btn btn-outline-modern btn-modern px-4 py-2">
                    Explore Insights
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-visual-premium h-100 d-flex align-items-center justify-content-center">
                <div className="about-glow-card">
                  <div className="about-mini-label">Developer Profile</div>
                  <h3 className="mb-3">Crafting websites with clarity, speed, and premium design language.</h3>
                  <p className="mb-0">
                    Focused on modern frontend development, elegant UI structure,
                    and professional digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card-modern about-panel-premium h-100 p-4 p-md-5">
              <div className="section-eyebrow mb-3">Who I Am</div>
              <h2 className="about-section-title mb-3">
                More than just building pages — I build online presence.
              </h2>
              <p className="text-muted-2 mb-3">
                A website should do more than exist. It should communicate quality,
                guide attention, and help people trust the person or brand behind it.
              </p>
              <p className="text-muted-2 mb-3">
                That is why I care deeply about layout, responsiveness, performance,
                design consistency, and a structure that feels polished from the first impression.
              </p>
              <p className="text-muted-2 mb-0">
                I enjoy turning ideas into elegant digital experiences that feel premium,
                intentional, and ready for real-world results.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card-modern about-panel-premium h-100 p-4 p-md-5">
              <div className="section-eyebrow mb-3">What I Focus On</div>
              <div className="about-feature-list">
                <div className="about-feature-item">
                  <span className="about-feature-dot"></span>
                  <div>
                    <h6 className="fw-bold mb-1">Frontend Development</h6>
                    <p className="text-muted-2 mb-0">
                      React-based, modular and scalable UI development for modern websites.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-dot"></span>
                  <div>
                    <h6 className="fw-bold mb-1">Premium User Interface</h6>
                    <p className="text-muted-2 mb-0">
                      Clean spacing, stronger typography, better alignment, and refined visual presentation.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-dot"></span>
                  <div>
                    <h6 className="fw-bold mb-1">Speed & Optimization</h6>
                    <p className="text-muted-2 mb-0">
                      Better performance, lighter pages, and smoother browsing experiences.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <span className="about-feature-dot"></span>
                  <div>
                    <h6 className="fw-bold mb-1">Conversion-Oriented Thinking</h6>
                    <p className="text-muted-2 mb-0">
                      Websites designed to build trust, encourage action, and support business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mb-5">
          <div className="text-center mb-4" data-aos="fade-up">
            <div className="section-eyebrow mb-2">Core Strengths</div>
            <h2 className="about-section-title mb-0">What makes my work feel premium</h2>
          </div>

          <div className="row g-4">
            {highlights.map((item, index) => (
              <div
                className="col-md-6 col-xl-3"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="card-modern about-highlight-card h-100 p-4">
                  <div className="about-icon-wrap mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted-2 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="card-modern about-stats-wrap p-4 p-md-5 mb-5" data-aos="fade-up">
          <div className="row g-4 text-center">
            {stats.map((item) => (
              <div className="col-6 col-lg-3" key={item.label}>
                <div className="about-stat-box">
                  <h2 className="about-stat-value mb-2">{item.value}</h2>
                  <p className="text-muted-2 mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-premium text-center card-modern p-4 p-md-5" data-aos="fade-up">
          <div className="section-eyebrow mb-2">Let’s Build Something Great</div>
          <h2 className="about-section-title mb-3">
            Ready for a website that looks premium and feels professional?
          </h2>
          <p
            className="text-muted-2 mb-4"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Whether you need a portfolio, business website, or modern frontend interface,
            I can help turn your idea into a polished digital experience.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn btn-brand btn-modern px-4 py-2">
              Start a Project
            </Link>
            <Link to="/" className="btn btn-outline-modern btn-modern px-4 py-2">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;