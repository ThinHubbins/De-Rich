import React from "react";

const Footer = () => {
  return (
     <footer className="gradient-footer text-white py-5 mt-5">
  <div className="container">
    <div className="row g-4">

      <div className="col-lg-4">
        <h5 className="fw-bold mb-3 footer-head">DeRich</h5>
        <p className="opacity-75 footer-text">Creating beautiful digital experiences with modern design solutions for forward-thinking
          companies.</p>
        <div className="d-flex gap-2 mt-4">
          <a href="/" className="facebook social-media">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="/" className="Instagram social-media">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="/" className="twitter social-media">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
      </div>

 
      <div className="col-lg-2 col-md-4">
        <h6 className="fw-bold mb-3">Quick Links</h6>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/" className="footer-link">About Us</a></li>
          <li className="mb-2"><a href="/" className="footer-link">Shop</a></li>
          <li className="mb-2"><a href="/" className="footer-link">FAQ</a></li>
          <li className="mb-2"><a href="/" className="footer-link">Contact</a></li>
        </ul>
      </div>

      
      <div className="col-lg-2 col-md-4">
        <h6 className="fw-bold mb-3">Resources</h6>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/" className="footer-link">Blog</a></li>
          <li className="mb-2"><a href="/" className="footer-link">Team</a></li>
          <li className="mb-2"><a href="/" className="footer-link">Support</a></li>
          <li className="mb-2"><a href="/" className="footer-link">Privacy Policy</a></li>
        </ul>
      </div>

     
      <div className="col-lg-4">
        <h6 className="fw-bold mb-3">Newsletter</h6>
        <p className="opacity-75 footer-text">Stay updated with our latest news and updates.</p>
        <div className="input-group mt-3">
          <input type="email" className="form-control newsletter-input" placeholder="Enter your email" />
          <button className="btn buttn px-4" type="button">Subscribe</button>
        </div>
      </div>
    </div>

    <hr className="my-4 opacity-25" />

 =
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <small className="opacity-75">© 2025 DeRich. All rights reserved.</small>
      </div>
      <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
        <a href="/" className="footer-link me-3"><small>Terms</small></a>
        <a href="/" className="footer-link me-3"><small>Privacy</small></a>
        <a href="/" className="footer-link"><small>Cookies</small></a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
