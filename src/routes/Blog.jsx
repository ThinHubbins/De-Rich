import React from "react";
import founder from "./profile/founder.jpg";
import ceopic from "./profile/blogimg.jpg";
import itotw from "./profile/bananabread.jpeg";
import customer from "./profile/customerofweek.jpg";
import staff from "./profile/mvp.jpg";

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <div className="container py-5">
          <div className="row vlog">
            <div className="col-6">
              <img
                src={founder}
                className="rounded-circle mb-3"
                width={100}
                height={100}
                alt="ceo of derich"
              />
              <br />
              <div
                className="foundtext"
                style={{
                  fontWeight: "500",
                }}
              >
                "Nnoye Anayo -{" "}
                <span style={{ color: "grey" }}>Founder & CEO</span>"
              </div>
              <br />
              <div className="qoute">Life is what you bake of it</div>
              <br />
              <div className="row">
                <div className="blicn col-6">
                  <div className="social-icons col-6">
                    <a href="/" className="icon">
                      <i className="bi bi-instagram"></i>
                    </a>

                    <a href="/" className="icon">
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a href="/" className="icon">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="qoutetime">
                <i class="bi bi-clock"> </i>December 8, 2025 - 3 min read
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center ">
              <img
                src={ceopic}
                alt="Nnoye Anayo"
                className="ceoimg border rounded"
              />
            </div>
          </div>
          <div className="row article">
            <div className="col-6">
              <div className="artihead">Daily Bake</div>
              <p
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                See what’s fresh in the oven today
              </p>
              <div className="row">
                <div className="col-6">
                  <img
                    src={itotw}
                    alt="item of the week"
                    className="dailybake border rounded"
                  />
                </div>
                <div className="col-6">
                  <div className="context">
                    Customer Focused
                    <p className="blogp">
                      One customer came back for a second loaf of{" "}
                      <span className="peoplename">Golden Banana Bread.</span>{" "}
                      Now it’s everyone’s favorite — soft, sweet, and made with
                      real bananas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <img
                    src={staff}
                    alt="customer of the month"
                    className="dailybake border rounded"
                  />
                </div>
                <div className="col-6">
                  <div className="context">
                    Employee of the Month
                    <p className="blogp">
                      <span className="peoplename">Tunde’s</span> dedication
                      keeps our bakery running smoothly. From perfecting every
                      loaf to greeting every customer with a smile, he makes
                      DeRich better every day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <img
                    src={customer}
                    alt="customer of the month"
                    className="dailybake border rounded"
                  />
                </div>
                <div className="col-6">
                  <div className="context">
                    Customer Of The Month
                    <p className="blogp">
                      <span className="peoplename">Mrs. Cathrina</span> tried
                      our Golden Banana Bread once and came back the same
                      morning for a second loaf. Now her family enjoys it every
                      weekend. Thank you for choosing DeRich and sharing the
                      love for fresh bread.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="specials d-flex justify-content-end">
                This Week Specials
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
