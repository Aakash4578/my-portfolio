import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="section-title mb-2">Blog & Insights</h1>
          <p
            className="text-muted-2 mb-0"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Articles on React, website performance, SEO, portfolio building,
            and monetization strategies for developers.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="card-modern h-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-100"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between text-muted-2 small mb-2">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h4 className="fw-bold mb-3">{post.title}</h4>
                  <p className="text-muted-2 small mb-4">{post.excerpt}</p>

                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-outline-modern btn-modern btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;