import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("mpqypnqb");

  if (state.succeeded) {
    return (
      <section className="section">
        <div className="container">
          <div className="card-modern p-4 p-md-5 text-center">
            <h2 className="fw-bold mb-3">Message Sent ✅</h2>
            <p className="text-muted-2 mb-0">
              Thanks for reaching out. I’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="section-title mb-2">Let's Work Together</h1>
          <p className="text-muted-2 mb-0">
            Have a project idea or need a developer for your next product?
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="row g-4">
          {/* LEFT INFO */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="card-modern p-4 p-md-5 h-100">
              <h4 className="fw-bold mb-4">Get In Touch</h4>

              <div className="d-flex gap-3 mb-4">
                <FaEnvelope size={20} />
                <div>
                  <div className="text-muted-2 small">Email</div>
                  <p className="mb-0">akashwaghella@gmail.com</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <FaMapMarkerAlt size={20} />
                <div>
                  <div className="text-muted-2 small">Location</div>
                  <p className="mb-0">Pakistan</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <FaBriefcase size={20} />
                <div>
                  <div className="text-muted-2 small">Availability</div>
                  <p className="mb-0">Available for freelance & contract work</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <FaClock size={20} />
                <div>
                  <div className="text-muted-2 small">Response Time</div>
                  <p className="mb-0">Usually within 24 hours</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-muted-2 small mb-2">Connect With Me</div>

                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/Aakash4578"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-modern btn-sm"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aakash-waghella-34195b37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-modern btn-sm"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="card-modern p-4 p-md-5">
              <h4 className="fw-bold mb-4">Send a Message</h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Project subject"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-brand btn-modern"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-muted-2 small mt-3 mb-0">
                Powered by Formspree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;