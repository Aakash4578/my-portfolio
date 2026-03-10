import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ toggleTheme, currentTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav id="topNav" className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand logo" to="/" onClick={handleHomeClick}>
          {"<Aakash/>"}
        </Link>

        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="nav">
          <ul className="navbar-nav ms-auto gap-lg-1 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>

            {isHomePage && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#services" onClick={handleLinkClick}>
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#process" onClick={handleLinkClick}>
                    Process
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#portfolio" onClick={handleLinkClick}>
                    Portfolio
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a className="nav-link" href="#pricing" onClick={handleLinkClick}>
                    Pricing
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#faq" onClick={handleLinkClick}>
                    FAQ
                  </a>
                </li> */}
              </>
            )}
          </ul>

          <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
            <button
              className="btn btn-outline-modern btn-modern btn-sm px-3"
              onClick={toggleTheme}
              type="button"
            >
              <i
                className={`bi ${
                  currentTheme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"
                }`}
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>

            <Link
              className="btn btn-brand btn-modern btn-sm px-3"
              to="/contact"
              onClick={handleLinkClick}
            >
              Hire Me <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;