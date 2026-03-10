import React from "react";
import { Link, useParams } from "react-router-dom";

const posts = {
  "fast-react-portfolio-website": {
    title: "How to Build a Fast React Portfolio Website",
    category: "React",
    intro:
      "A fast portfolio website creates a better first impression and helps users stay longer on your site.",
    sections: [
      {
        type: "paragraph",
        text: "When developers build portfolio websites, they often focus only on visuals. But performance matters just as much. A slow website can make your work look less professional even if the design is strong.",
      },
      {
        type: "heading",
        text: "How to improve portfolio speed",
      },
      {
        type: "list",
        items: [
          "Compress large images",
          "Use lazy loading where possible",
          "Avoid unnecessary animations",
          "Split large components",
          "Minify assets before deployment",
        ],
      },
      {
        type: "paragraph",
        text: "A fast website also supports better SEO and user trust. If your website feels smooth, users are more likely to explore your services, projects, and contact page.",
      },
      {
        type: "paragraph",
        text: "For monetization, blog pages built inside a fast website can later be used for ads, affiliate recommendations, or converting readers into clients.",
      },
    ],
  },

  "react-performance-tips": {
    title: "React Performance Tips for Real Projects",
    category: "Performance",
    intro:
      "React performance becomes important when your app starts growing.",
    sections: [
      {
        type: "paragraph",
        text: "Many developers create apps that work well initially but become slower as more sections, components, and features are added. The solution is not always complex. Small improvements can make a big difference.",
      },
      {
        type: "heading",
        text: "Useful React performance tips",
      },
      {
        type: "list",
        items: [
          "Keep components small and reusable",
          "Avoid unnecessary state updates",
          "Use memoization carefully",
          "Optimize image sizes",
          "Re-render only where needed",
          "Use route-based code splitting",
        ],
      },
      {
        type: "paragraph",
        text: "Good performance improves user experience and also helps your portfolio feel more polished and professional.",
      },
    ],
  },

  "developers-earn-from-blog-pages": {
    title: "How Developers Can Earn from Blog Pages",
    category: "Monetization",
    intro: "Developers can earn from blog pages in multiple ways.",
    sections: [
      {
        type: "paragraph",
        text: "The first method is AdSense. If your blog gets traffic from search engines, ads can generate passive income. The second method is affiliate marketing, where you recommend tools and earn commission. The third and strongest method is client generation.",
      },
      {
        type: "heading",
        text: "Topics that can attract both traffic and clients",
      },
      {
        type: "list",
        items: [
          "React development",
          "Portfolio building",
          "SEO basics",
          "Web performance",
          "Landing page improvement",
        ],
      },
      {
        type: "paragraph",
        text: "A good portfolio blog is not only for content. It is also a trust-building machine. It helps you look more credible, rank on Google, and attract business opportunities.",
      },
    ],
  },

  "best-portfolio-structure-for-freelance-developers": {
    title: "Best Portfolio Structure for Freelance Developers",
    category: "Portfolio",
    intro:
      "A freelance developer portfolio should be simple, focused, and conversion-friendly.",
    sections: [
      {
        type: "heading",
        text: "Best structure usually includes",
      },
      {
        type: "list",
        items: [
          "Hero section",
          "Trust section",
          "Services",
          "Selected work",
          "Testimonials",
          "Pricing or process",
          "FAQ",
          "Contact form",
          "Blog section",
        ],
      },
      {
        type: "paragraph",
        text: "The homepage should stay clean and focused on trust and conversions. Blog content should live on separate pages so the home page does not feel crowded.",
      },
      {
        type: "paragraph",
        text: "A structured portfolio looks more professional and helps clients quickly understand what you do and why they should contact you.",
      },
    ],
  },

  "why-website-speed-matters-for-seo": {
    title: "Why Website Speed Matters for SEO",
    category: "SEO",
    intro: "Website speed matters because users expect fast loading experiences.",
    sections: [
      {
        type: "paragraph",
        text: "A slow website can increase bounce rate and reduce engagement. Even if someone likes your design, they may leave before seeing your services or projects.",
      },
      {
        type: "heading",
        text: "Ways to improve speed",
      },
      {
        type: "list",
        items: [
          "Use optimized image formats",
          "Keep CSS and JS lean",
          "Remove unused packages",
          "Avoid heavy third-party scripts",
          "Deploy with proper caching",
        ],
      },
      {
        type: "paragraph",
        text: "Performance is not only technical. It directly affects trust, rankings, and conversions.",
      },
    ],
  },

  "how-to-write-blog-content-for-developer-portfolio": {
    title: "How to Write Blog Content for a Developer Portfolio",
    category: "Content",
    intro:
      "A developer portfolio blog should answer useful questions and solve practical problems.",
    sections: [
      {
        type: "heading",
        text: "Good blog topic examples",
      },
      {
        type: "list",
        items: [
          "How to build a portfolio website",
          "React performance tips",
          "SEO basics for developers",
          "Best tools for frontend developers",
          "How to optimize landing pages",
        ],
      },
      {
        type: "paragraph",
        text: "Your blog should not be random. It should support your services, your skills, and your personal brand.",
      },
      {
        type: "paragraph",
        text: "When someone reads useful content on your site, they trust your expertise more. Over time, that can bring traffic, leads, and monetization opportunities.",
      },
    ],
  },
};

function BlogDetailsPage() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <section className="section">
        <div className="container text-center" style={{ maxWidth: "700px" }}>
          <div className="card-modern p-4 p-md-5">
            <h1 className="section-title mb-3">Post Not Found</h1>
            <p className="text-muted-2 mb-4">
              The article you are looking for does not exist or may have been removed.
            </p>
            <Link to="/blog" className="btn btn-modern">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* HERO */}
        <div className="card-modern p-4 p-md-5 mb-4" data-aos="fade-up">
          <span
            className="d-inline-block mb-3 px-3 py-2 rounded-pill"
            style={{
              background: "rgba(255,255,255,0.06)",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            {post.category}
          </span>

          <h1 className="section-title mb-3" style={{ lineHeight: "1.2" }}>
            {post.title}
          </h1>

          <p
            className="text-muted-2 mb-0"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            {post.intro}
          </p>
        </div>

        {/* ARTICLE */}
        <div className="card-modern p-4 p-md-5" data-aos="fade-up">
          <article>
            {post.sections.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h3
                    key={index}
                    className="fw-bold mt-4 mb-3"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {section.text}
                  </h3>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-muted-2 mb-3"
                    style={{ lineHeight: "1.9", fontSize: "16px" }}
                  >
                    {section.text}
                  </p>
                );
              }

              if (section.type === "list") {
                return (
                  <ul
                    key={index}
                    className="mb-4"
                    style={{
                      paddingLeft: "1.2rem",
                      lineHeight: "1.9",
                    }}
                  >
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-2 mb-2"
                        style={{ fontSize: "16px" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </article>
        </div>

        {/* CTA */}
        <div className="card-modern p-4 p-md-5 mt-4 text-center" data-aos="fade-up">
          <h4 className="fw-bold mb-3">Need a Developer for Your Project?</h4>
          <p
            className="text-muted-2 mb-4"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            If you are looking for a clean, fast, and conversion-focused website,
            feel free to reach out. I am available for freelance and contract work.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-brand btn-modern btn-sm px-3">
              Hire Me <i className="bi bi-arrow-right ms-1"></i>
            </Link>
            <Link to="/blog" className="btn btn-outline-modern btn-modern">
              More Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailsPage;