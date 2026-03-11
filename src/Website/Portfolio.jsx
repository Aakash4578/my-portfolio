import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
const img = (path) => `${import.meta.env.BASE_URL}${path}`;
  const projects = [
    {
      id: 1,
      title: "Shopese – Airline Booking System Website",
      category: "Full Stack Development",
      images: [
        img("assets/Image/portfolio/f1.png"),
        img("assets/Image/portfolio/f2.png"),
        img("assets/Image/portfolio/f3.png"),
        img("assets/Image/portfolio/f4.png"),
        img("assets/Image/portfolio/f5.png"),
        img("assets/Image/portfolio/f6.png"),
        img("assets/Image/portfolio/f7.png"),
        img("assets/Image/portfolio/f8.png"),
        img("assets/Image/portfolio/f9.png"),
        img("assets/Image/portfolio/f10.png"),
        img("assets/Image/portfolio/f11.png"),
      ],
      shortDesc:
        "Shopese is a complete airline ticket booking system designed for a smooth user experience.",
      fullDesc:
        "Shopese is a complete airline ticket booking system designed for a smooth user experience. I developed the full website using modern frontend technologies and strong backend logic to manage flight listings, booking workflows, payment integration, and user authentication. My solution ensured a responsive design, secure transactions, and real-time booking updates — making the system fast, reliable, and user-friendly.",
      stack: [
        "React",
        "Bootstrap",
        "Node.js",
        "MongoDB",
        "REST API",
        "Authentication",
        "Booking Management",
        "Admin Dashboard",
        "User Profiles",
        "Flight Search",
        "Booking Workflow",
        "Real-time Updates",
        "Responsive Design",
        "Security Best Practices",
      ],
      features: [
        "Authentication & protected routes",
        "Analytics widgets",
        "Modular dashboard layout",
        "Reusable UI components",
        "Responsive interface",
      ],
      year: "2023",
      link: "#",
    },
    {
      id: 2,
      title: "Photography Portfolio Website – Static Responsive Design",
      category: "Frontend / UI UX Design",
      images: [
        img("assets/Image/portfolio/P1.png"),
        img("assets/Image/portfolio/P2.png"),
        img("assets/Image/portfolio/P3.png"),
        img("assets/Image/portfolio/P4.png"),
        img("assets/Image/portfolio/P6.png"),

      ],
      shortDesc:
        "Developed a visually engaging and fully responsive photography website.",
      fullDesc:
        "Developed a visually engaging and fully responsive photography website using HTML, CSS, and Bootstrap. The website features a modern layout with high-resolution photo galleries, category-based filtering, and smooth scrolling effects to enhance the user experience. Designed to showcase a photographer’s work in the best light, the layout focuses on clean presentation and accessibility across all devices. This static site serves as an online portfolio for personal branding and client outreach.",
      stack: ["HTML", "Bootstrap", "AOS", "Layout Design"],
      features: [
        "Premium hero section",
        "Animated sections",
        "Case-study based portfolio",
        "Strong personal branding",
        "Responsive layout",
      ],
      year: "2025",
      link: "#",
    },
    {
      id: 3,
      title: "Dynamic Quran Learning Website with Admin Panel – Al-Haseebi Academy",
      category: "UI / Conversion Design + Full Stack",
      images: [
        img("assets/Image/portfolio/q1.png"),
        img("assets/Image/portfolio/q2.png"),
        img("assets/Image/portfolio/q3.png"),
        img("assets/Image/portfolio/q4.png"),
        img("assets/Image/portfolio/q5.png"),
        img("assets/Image/portfolio/q7.png"),
        img("assets/Image/portfolio/q8.png"),
        img("assets/Image/portfolio/q9.png"),
        img("assets/Image/portfolio/q10.png"),
        img("assets/Image/portfolio/q11.png"),
        img("assets/Image/portfolio/q12.png"),
      ],
      shortDesc:
        "Developed a dynamic Quran learning platform with a powerful admin panel.",
      fullDesc:
        "Developed a dynamic Quran learning platform with a powerful admin panel. Features include student registration, course enrollment, live session scheduling, blog management, and Google Translate for multilingual users. Admins can manage users, post blogs, and update course content in real-time. Built with PHP, HTML, CSS, and JavaScript, this project helped the academy manage online operations efficiently and globally.",
      stack: [
        "PHP",
        "Bootstrap",
        "HTML5",
        "CSS",
        "JavaScript",
        "Google Translate API",
        "Admin Panel",
        "User Management",
        "Blog System",
        "Course Management",
      ],
      features: [
        "Premium UI sections",
        "Trust signals",
        "High-converting layout",
        "Fast loading structure",
        "Mobile optimized",
      ],
      year: "2024",
      link: "#",
    },
    {
      id: 4,
      title: "Personal Portfolio Website for Web Developer",
      category: "Design + Frontend Development",
      images: [
        img("assets/Image/portfolio/ma1.png"),
        img("assets/Image/portfolio/ma2.png"),
        img("assets/Image/portfolio/ma3.png"),
        img("assets/Image/portfolio/ma4.png"),
        img("assets/Image/portfolio/ma5.png"),
        img("assets/Image/portfolio/ma6.png"),
      ],
      shortDesc:
        "Designed and developed a modern personal portfolio website.",
      fullDesc:
        "Designed and developed a modern personal portfolio website to showcase my web development skills and projects. The site includes a home page, about section, project gallery, contact form, and responsive layout. It helped me present my work to clients in a professional and appealing way.",
      stack: ["React", "SCSS", "Bootstrap Utilities"],
      features: [
        "Reusable components",
        "Consistent spacing system",
        "Modern UI patterns",
        "Fast development workflow",
        "Scalable frontend base",
      ],
      year: "2025",
      link: "#",
    },
    {
      id: 5,
      title: "Responsive Business Website Design (HTML, CSS, Bootstrap)",
      category: "Design + Frontend Development",
      images: [
        img("assets/Image/portfolio/b1.png"),
        img("assets/Image/portfolio/b2.png"),
        img("assets/Image/portfolio/b3.png"),
        img("assets/Image/portfolio/b4.png"),
        

      ],
      shortDesc:
        "Designed and developed a responsive and visually appealing static business website.",
      fullDesc:
        "Designed and developed a responsive and visually appealing static business website using HTML, CSS, and Bootstrap. The goal was to create a professional online presence for a small business. My solution included a modern layout, mobile responsiveness, interactive elements, and a clean UI. The project helped the client establish a strong digital identity and attract more online inquiries.",
      stack: [
        "React",
        "SCSS",
        "Bootstrap Utilities",
        "AOS",
        "Layout Design",
        "UI/UX Principles",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
      ],
      features: [
        "Reusable components",
        "Consistent spacing system",
        "Modern UI patterns",
        "Fast development workflow",
        "Scalable frontend base",
      ],
      year: "2025",
      link: "#",
    },
    {
      id: 6,
      title: "Nexus Communication System Automation",
      category: "Design + Frontend Development + Automation full stack",
      images: [
        "assets/Image/portfolio/n1.png",
    
      ],
      shortDesc:
        "Developed a web-based system to automate Nexus Communication’s operations.",
      fullDesc:
        "Developed a web-based system to automate Nexus Communication’s operations, including order processing, employee management, and billing. Created role-based modules for Admin, Employee, and Customer. Implemented order tracking using unique IDs and an advanced search feature. The solution streamlined manual processes, improved service speed, and enhanced data accuracy.",
      stack: [
        "Bootstrap Utilities",
        "AOS",
        "Layout Design",
        "UI/UX Principles",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
        "Automation Logic",
        "Role-Based Access Control",
        "Order Management System",
        "Employee Management System",
        "Customer Management System",
        "Search Functionality",
        "Unique ID Generation",
        "Data Validation",
        "Security Best Practices",
        "Testing and Debugging",
        "Deployment",
      ],
      features: [
        "Reusable components",
        "Consistent spacing system",
        "Modern UI patterns",
        "Fast development workflow",
        "Scalable frontend base",
      ],
      year: "2025",
      link: "#",
    },
    {
  id: 7,
  title: "Portfolio Website for a Graphic Designer",
  category: "UI / UX Design + Frontend Development",
  images: [
    img("assets/Image/portfolio/m1.png"),
    img("assets/Image/portfolio/m2.png"),
    img("assets/Image/portfolio/m3.png"),
    img("assets/Image/portfolio/m4.png"),
    img("assets/Image/portfolio/m5.png"),
  ],
  shortDesc:
    "Designed and developed a modern portfolio website for a graphic designer to professionally showcase creative work and attract clients.",

  fullDesc:
    "I designed and developed this portfolio website for a graphic designer who wanted a strong online presence to showcase creative work professionally. The website was built to present branding projects, social media designs, marketing creatives, and visual portfolio pieces in a clean and visually engaging way. My goal was to create a modern layout with strong typography, smooth user flow, responsive sections, and a professional presentation that helps the client attract potential customers and present their services effectively.",

  stack: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "Responsive Design",
    "UI Design",
    "UX Planning",
    "Portfolio Layout"
  ],

  features: [
    "Modern hero section",
    "Creative portfolio showcase",
    "Project gallery layout",
    "Responsive design for all devices",
    "Clean and professional UI",
    "Service presentation sections",
    "Contact section for client inquiries"
  ],

  year: "2025",
  link: "#",
}
  ];

  useEffect(() => {
    const modalEl = document.getElementById("projectModal");
    if (modalEl) {
      Modal.getOrCreateInstance(modalEl);
    }
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    const modalEl = document.getElementById("projectModal");
    const modal = Modal.getOrCreateInstance(modalEl);
    modal.show();
  };

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <>
      <section id="portfolio" className="portfolio-section section">
        <div className="container lift">
          <div
            className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-5"
            data-aos="fade-up"
          >
            <div>
              <span className="portfolio-eyebrow">Selected Work</span>
              <h2 className="section-title mb-2">Portfolio</h2>
              <p className="portfolio-subtext mb-0">
                A curated selection of projects focused on clean UI, scalable
                development, and modern digital experiences.
              </p>
            </div>

            <a href="#contact" className="btn btn-brand btn-modern">
              Let’s Build Something
            </a>
          </div>

          {/* Featured Project */}
          <div
            className="featured-project mb-4"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-7">
                <div className="featured-project-image-wrap h-100">
                  <img
                    src={featuredProject.images[0]}
                    alt={featuredProject.title}
                    className="featured-project-image"
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="featured-project-content h-100">
                  <div className="project-chip mb-3">
                    {featuredProject.category}
                  </div>

                  <h3 className="featured-project-title">
                    {featuredProject.title}
                  </h3>

                  <p className="featured-project-desc">
                    {featuredProject.fullDesc}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {featuredProject.stack.map((item, index) => (
                      <span className="tag" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    <button
                      className="btn btn-brand btn-modern"
                      onClick={() => openProject(featuredProject)}
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="row g-4">
            {otherProjects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 60}
              >
                <div className="project-card h-100">
                  <div className="project-card-image-wrap">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-card-image"
                    />
                  </div>

                  <div className="project-card-body">
                    <div className="project-chip mb-2">{project.category}</div>

                    <h4 className="project-card-title">{project.title}</h4>

                    <p className="project-card-text">{project.shortDesc}</p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 3).map((item, i) => (
                        <span className="mini-tag" key={i}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <button
                        className="project-link-btn"
                        onClick={() => openProject(project)}
                      >
                        View Details <i className="bi bi-arrow-right ms-1"></i>
                      </button>

                      <span className="project-year">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content project-modal-content">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold">
                {selectedProject?.title || "Project Details"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body pt-3">
              {selectedProject && (
                <div className="row g-4">
                  <div className="col-lg-7">
                    {/* Main Image */}
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-100 rounded-4 mb-3"
                      style={{ maxHeight: "430px", objectFit: "cover" }}
                    />

                    {/* Gallery Images */}
                    <div className="row g-3">
                      {selectedProject.images.map((img, index) => (
                        <div className="col-md-4 col-6" key={index}>
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-100 rounded-3"
                            style={{ height: "120px", objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="project-chip mb-3">
                      {selectedProject.category}
                    </div>

                    <h3 className="fw-bold mb-3">{selectedProject.title}</h3>

                    <p className=" mb-4">
                      {selectedProject.fullDesc}
                    </p>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Tech Stack</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProject.stack.map((item, index) => (
                          <span className="tag" key={index}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Key Features</h6>
                      <ul className="project-feature-list">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                      {/* <a
                        href="#contact"
                        className="btn btn-outline-modern btn-modern"
                      >
                        Start Similar Project
                      </a> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;