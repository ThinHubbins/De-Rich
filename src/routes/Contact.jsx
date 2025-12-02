import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Whatsapp from "../components/Whatsapp";
import Swal from "sweetalert2";

const Contact = () => {

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tdo82um",      // e.g. service_123abc
        "template_ikg5myi",     // e.g. template_45dfj2
        formRef.current,
        "fO_LqcvBKCqUDqWf6"       // e.g. X3abcdLkje9
      )
      .then(
        () => {
        //   alert("Message sent successfully!");
          formRef.current.reset();
          Swal.fire(
            'Thank you!',
            'Your message has been sent successfully.',
            'success'
          )
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            
            {/* FORM SECTION */}
            <div className="col-md-6">
              <h1 className="mt-5 great-vibes-regular contact">Contact Us</h1>

              <div className="mt-5">
                <form ref={formRef} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                  <br />

                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                  <br />

                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                  <br />

                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                  <br />

                  <button type="submit" className="buttn btn">
                    Send Message
                  </button>

                </form>
              </div>
            </div>

            {/* MAP SECTION */}
            <div className="col-md-6">
              <iframe
                className="mappie"
                src="https://www.google.com/maps/embed?pb=!1m18!...your map URL"
                width="600"
                height="350"
                loading="lazy"
                title="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Whatsapp />
    </div>
  );
};

export default Contact;
