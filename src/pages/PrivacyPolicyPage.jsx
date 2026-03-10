import React from "react";

function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="mb-4" data-aos="fade-up">
          <h1 className="section-title mb-2">Privacy Policy</h1>
          <p className="text-muted-2 mb-0">
            This page explains how information may be collected and used on this website.
          </p>
        </div>

        <div className="card-modern p-4 p-md-5" data-aos="fade-up">
          <h4 className="fw-bold mb-3">1. Information Collection</h4>
          <p className="text-muted-2">
            This website may collect personal information such as your name, email address, or other
            details when you submit a contact form.
          </p>

          <h4 className="fw-bold mb-3 mt-4">2. How Information Is Used</h4>
          <p className="text-muted-2">
            Information provided through the website may be used to respond to inquiries, improve
            website content, and communicate regarding services or project discussions.
          </p>

          <h4 className="fw-bold mb-3 mt-4">3. Cookies</h4>
          <p className="text-muted-2">
            This website may use cookies or similar technologies to improve browsing experience,
            analyze website traffic, and support future advertising systems such as Google AdSense.
          </p>

          <h4 className="fw-bold mb-3 mt-4">4. Third-Party Services</h4>
          <p className="text-muted-2">
            In the future, this website may use third-party tools such as analytics services, ad
            networks, affiliate platforms, or contact form providers. These services may collect
            limited technical information according to their own privacy practices.
          </p>

          <h4 className="fw-bold mb-3 mt-4">5. Data Protection</h4>
          <p className="text-muted-2">
            Reasonable efforts are made to protect personal information, but no online method of
            transmission or storage is fully secure.
          </p>

          <h4 className="fw-bold mb-3 mt-4">6. Contact</h4>
          <p className="text-muted-2 mb-0">
            If you have questions about this privacy policy, you can contact the website owner through
            the contact page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;