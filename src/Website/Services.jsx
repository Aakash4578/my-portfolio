import React from "react";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiNextdotjs,
  SiRedux,
  SiMysql,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

function Services() {
  return (
    <section id="services" className="section">
      <div className="container lift">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <p className="text-muted-2 mb-0">
            End-to-end development for companies & startups.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <i className="bi bi-globe2"></i>
                </div>
                <div>
                  <h5 className="mb-1">Websites</h5>
                  <p className="text-muted-2 small mb-0">
                    Business websites, landing pages, portfolios & funnels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <i className="bi bi-stack"></i>
                </div>
                <div>
                  <h5 className="mb-1">MERN Stack</h5>
                  <p className="text-muted-2 small mb-0">
                    MongoDB, Express, React, Node apps that scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div>
                  <h5 className="mb-1">Full-Stack Development</h5>
                  <p className="text-muted-2 small mb-0">
                    Frontend + backend, APIs, databases, auth systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <i className="bi bi-filetype-php"></i>
                </div>
                <div>
                  <h5 className="mb-1">PHP Development</h5>
                  <p className="text-muted-2 small mb-0">
                    Custom PHP apps, panels, integrations, fixes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <FaReact size={28} color="#61DBFB" />
                </div>
                <div>
                  <h5 className="mb-1">React JS</h5>
                  <p className="text-muted-2 small mb-0">
                    Modern UI, SPA builds, components, optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="card-modern p-4">
              <div className="d-flex gap-3">
                <div className="icon">
                  <i className="bi bi-tools"></i>
                </div>
                <div>
                  <h5 className="mb-1">Maintenance</h5>
                  <p className="text-muted-2 small mb-0">
                    Updates, speed boosts, bug fixes, ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up">
          <div className="glass p-4 p-md-5">
            <div className="row g-3 align-items-center">
              <div className="col-lg-4">
                <h4 className="fw-bold mb-2">Tech Stack</h4>
                <p className="text-muted-2 mb-0">
                  Modern tools for fast, secure builds.
                </p>
              </div>

              <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                  <span className="pill">
                    <FaReact size={20} color="#61DBFB" /> React
                  </span>
                  <span className="pill">
                    <SiNextdotjs size={20} /> Next.js
                  </span>
                 

                  <span className="pill">
                    <FaNodeJs size={20} color="#3C873A" /> Node.js
                  </span>
                  <span className="pill">
                    <SiExpress size={20} /> Express
                  </span>

                  <span className="pill">
                    <SiMongodb size={20} color="#4DB33D" /> MongoDB
                  </span>
                  <span className="pill">
                    <SiMysql size={20} color="#00758F" /> MySQL
                  </span>

                  <span className="pill">
                    <FaPhp size={20} color="#777BB4" /> PHP
                  </span>
                 

                  <span className="pill">
                    <SiJavascript size={20} color="#F7DF1E" /> JavaScript
                  </span>
                  <span className="pill">
                    <SiTypescript size={20} color="#3178C6" /> TypeScript
                  </span>

                  <span className="pill">
                    <SiHtml5 size={20} color="#E34F26" /> HTML5
                  </span>
                  <span className="pill">
                    <SiCss3 size={20} color="#1572B6" /> CSS3
                  </span>

                  <span className="pill">
                    <SiBootstrap size={20} color="#7952B3" /> Bootstrap
                  </span>
                  <span className="pill">
                    <SiTailwindcss size={20} color="#38BDF8" /> Tailwind
                  </span>

                  <span className="pill">
                    <SiGit size={20} color="#F1502F" /> Git
                  </span>
                  <span className="pill">
                    <SiGithub size={20} /> GitHub
                  </span>

                  <span className="pill">
                    <SiPostman size={20} color="#FF6C37" /> Postman
                  </span>
                  <span className="pill">
                    <SiFirebase size={20} color="#FFCA28" /> Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;