import React from "react";
import Slider from "react-slick";
import Mantest from "../routes/profile/man1.jpg";
import Womantest from "../routes/profile/woma.jpg";
import mentest from "../routes/profile/men.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">What Our Clients Say</h2>

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="testimoni">
          <div
            className="text-center p-4 shadow rounded mx-auto"
            style={{ maxWidth: 500 }}
          >
            <div className="row">
              <div className="col-6">
                <img
                  src={Mantest}
                  className="rounded-circle mb-3"
                  alt="client"
                  width={80}
                  height={80}
                />
              </div>
              <div className="rating col-6 d-flex justify-content-end">
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-half" style={{ color: "gold" }}></i>
              </div>
            </div>

            <p className=" fw-medium">
              “The service was amazing — fast delivery, clean UI, and a great
              experience overall.”
            </p>

            <h5 className="fw-bold mt-3">Alex Johnson</h5>
            <span className="text-muted">Product Designer</span>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div
            className="text-center p-4 shadow rounded mx-auto"
            style={{ maxWidth: 500 }}
          >
            <div className="row">
              <div className="col-6">
                <img
                  src={Womantest}
                  className="rounded-circle mb-3"
                  alt="client"
                  width={80}
                  height={80}
                />
              </div>
              <div className="rating col-6 d-flex justify-content-end">
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
              </div>
            </div>

            <p className="fw-medium">
              “Absolutely love working with this team. Excellent support and
              friendly communication.”
            </p>

            <h5 className="fw-bold mt-3">Sarah Williams</h5>
            <span className="text-muted">Marketing Manager</span>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div
            className="text-center p-4 shadow rounded mx-auto"
            style={{ maxWidth: 500 }}
          >
            <div className="row">
              <div className="col-6">
                <img
                  src={mentest}
                  className="rounded-circle mb-3"
                  alt="client"
                  width={80}
                  height={80}
                />
              </div>
              <div className="rating col-6 d-flex justify-content-end">
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
              </div>
            </div>

            <p className="fw-medium">
              “Professional work. Clean UI, scalable code, and fast delivery.”
            </p>

            <h5 className="fw-bold mt-3">David Kim</h5>
            <span className="text-muted">Software Engineer</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
