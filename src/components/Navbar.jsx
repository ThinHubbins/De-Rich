import React from "react";
import Derichhero from "../routes/heroimg/De-Richheroimg.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark custom-nav">
        <div class="container">
          <a class="navbar-brand brand-logo" href="/">
            <img
              width="100"
              className="derichimg"
              src={Derichhero}
              alt="De-Rich Logo"
            />
          </a>

          <button
            class="buttn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
              <li class="nav-item">
                <a class="nav-link active text-warning" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/shop">
                  SHOP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">
                  BLOG
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center gap-3">
              <i class="bi bi-person-fill nav-icon"></i>
              <i class="bi bi-cart-fill nav-icon"></i>
              <i class="bi bi-search nav-icon"></i>

              <button class="btn buttn rounded-pill px-4 fw-semibold">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
