import React from "react";
import Whatsapp from "../components/Whatsapp";
// import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <h1 className="mt-5 great-vibes-regular contact">Contact Us</h1>
              <div className="mt-5">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                  <br />
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <br />
                  <button className="buttn btn">Send Message</button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
            <iframe className="mappie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16462.462701158984!2d3.293051218295809!3d6.6051462546954225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91ab08effccd%3A0xc8487a911dc051d9!2sSam%20Rose%20Cl%2C%20Alimosho%2C%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764608619721!5m2!1sen!2sng"
              width="600"
              height="350"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div></div>
          </div>
          
            
        
      </section>
      <Whatsapp />
    </div>
  );
};

export default Contact;
