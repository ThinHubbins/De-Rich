import React from "react";
import "./Home.css";
import wheat from "../routes/heroimg/wheatleaf.png";
import mainimg from "./heroimg/Mainimg.png";
import favvi from "./heroimg/favicon.png";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-md-2 d-flex flex-column align-items-center mb-3 mb-md-0">
              <div className="headtext">DeRich-</div>
              <img
                src={favvi}
                alt="DeRich Bakery Logo"
                className="favvi img-fluid mt-2"
              />
            </div>

            {/* Center Column */}
            <div className="col-12 col-md-8 text-center mb-3 mb-md-0">
              <img
                src={mainimg}
                alt="Fresh Bread Display"
                className="mainimg img-fluid"
              />
              <div className="mt-3">
                <button className="btn order">Order Now</button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-2 d-flex flex-column align-items-center">
              <img
                src={wheat}
                alt="Wheat Leaf Decoration"
                className="wheat img-fluid mb-3"
              />
              <div className="subtext text-center">
                DeRich Bread Bakery - Freshly Baked Goodness Every Day
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
