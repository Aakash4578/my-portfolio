import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function Insights() {
  const insightPosts = blogPosts.slice(0, 3);

  return (
    <section className="section insights-premium-section">
      <div className="container">
        <div
          className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-5"
          data-aos="fade-up"
        >
          <div style={{ maxWidth: "720px" }}>
            <span className="section-eyebrow d-inline-block mb-2">
              Latest Insights
            </span>
            <h2 className="section-title insights-premium-title mb-2">
              Articles that build trust, authority, and a stronger digital presence
            </h2>
            <p className="text-muted-2 mb-0 insights-premium-subtitle">
              A curated blog section designed to make your portfolio feel more premium,
              more credible, and more valuable to potential clients.
            </p>
          </div>

          <div className="d-flex gap-2">
            <Link to="/blog" className="btn btn-brand btn-modern px-4">
              View All Articles
            </Link>
            <Link to="/contact" className="btn btn-outline-modern btn-modern px-4">
              Work With Me
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {insightPosts.map((post, index) => (
            <div
              className="col-md-6 col-xl-4"
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                <article className="card-modern insights-premium-card h-100 overflow-hidden">
                  <div className="insights-image-wrap">
                    <img
                      className="w-100 insights-premium-image"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>

                  <div className="p-4 d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-center text-muted-2 small mb-2">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="fw-bold insights-card-title mb-3">
                      {post.title}
                    </h4>

                    <p className="text-muted-2 mb-4 insights-card-desc">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <span className="insights-read-link">
                        Read Article
                        <i className="bi bi-arrow-right ms-2"></i>
                      </span>

                      <span className="insights-mini-badge">Insight</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

     <div
  className="card-modern insights-bottom-cta p-4 p-md-5 mt-5 text-center"
  data-aos="fade-up"
>
  <span className="section-eyebrow d-inline-block mb-2">
    Knowledge + Experience
  </span>

  <h3 className="fw-bold mb-3">
    Real development insights from real-world projects
  </h3>

  <p
    className="text-muted-2 mb-4"
    style={{ maxWidth: "760px", margin: "0 auto" }}
  >
    I regularly share insights about MERN stack development, modern UI design,
    performance optimization, and lessons learned while building real web
    applications for clients. These articles reflect my practical experience
    and approach to building scalable, high-quality digital products.
  </p>

  <div className="d-flex flex-wrap justify-content-center gap-3">
    <Link to="/blog" className="btn btn-brand btn-modern px-4">
      Explore Blog
    </Link>

    <Link to="/contact" className="btn btn-outline-modern btn-modern px-4">
      Start a Project
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}

export default Insights;