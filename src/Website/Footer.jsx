import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-premium pt-5 pb-4">
      <div className="container">

        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3 logo"> {"<Aakash/>"}</h3>

            <p className="text-muted-2 mb-3">
              Building modern websites, clean interfaces, and high-performance
              digital experiences that help brands grow online.
            </p>

          <div className="d-flex gap-3 footer-social">

  <a 
    href="https://github.com/Aakash4578" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-icon github"
  >
    <i className="bi bi-github"></i>
  </a>

  <a 
    href="https://www.linkedin.com/in/aakash-waghella-34195b37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-icon linkedin"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  <a 
    href="https://www.instagram.com/aakash__2002__a/?hl=en" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-icon instagram"
  >
    <i className="bi bi-instagram"></i>
  </a>

  <a 
    href="https://www.facebook.com/profile.php?id=100094497673812" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-icon facebook"
  >
    <i className="bi bi-facebook"></i>
  </a>

  <a 
    href="https://www.upwork.com/freelancers/~015119b165938ebc4e?mp_source=share" 
    target="_blank" 
    rel="noopener noreferrer"
    className="footer-icon upwork"
  >
    <i className="bi bi-briefcase"></i>
  </a>

</div>
          </div>


          {/* Pages */}
          <div className="col-lg-2 col-md-4">
            <h6 className="footer-title">Pages</h6>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>
          </div>


          {/* Resources */}
          <div className="col-lg-3 col-md-4">
            <h6 className="footer-title">Resources</h6>

            <ul className="footer-links">

              <li>
                <Link to="/blog">Insights</Link>
              </li>

              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Developer Tools</a>
              </li>

            </ul>
          </div>


          {/* CTA */}
          <div className="col-lg-3 col-md-4">

            <h6 className="footer-title">Start a Project</h6>

            <p className="text-muted-2 mb-3">
              Have an idea or project in mind? Let's build something great together.
            </p>

            <Link to="/contact" className="btn btn-brand btn-modern btn-sm px-4">
              Work With Me
            </Link>

          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom mt-5 pt-4">

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">

            <p className="text-muted-2 mb-0 small">
              © {new Date().getFullYear()} Aakash. All rights reserved.
            </p>

            {/* <div className="footer-bottom-links">

              <Link to="/privacy-policy">Privacy</Link>

              <span className="mx-2">•</span>

              <a href="#">Terms</a>

            </div> */}

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;