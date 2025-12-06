import React from 'react';
import Testimonials from '../components/Testimonials';

const Faq = () => {
  return (
    <div className="faqbod">
      <div className="container py-5">
        <div className="row m-0 min-vh-100 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <div className="boxfq">
              <div className="faqtex text-center mb-4">
                Have questions? We’re here to help!
              </div>

              <div className="acodon">
                <div className="accordion accordion-flush" id="accordionFlushExample">

                  {/* ITEM 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion.
                      </div>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion.
                      </div>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default Faq;
