import React from 'react'
import aboutlogo from '../routes/AboutImg/ovenfresh.jpg'

const About = () => {
  return (
    <div>
      <div className="container-fluid about-section">
  <div className="row vh-100 d-flex justify-content-center align-items-center m-0">
    <div className="col-sm-12 col-md-6 d-flex justify-content-end p-2">
      <img src={aboutlogo} alt="About Logo" style={{height: '400px'}} className="img-fluid mb-4 border rounded" />
      
    </div>
    <div className="col-sm-12 col-md-6">
      <div className='abouth1'>Luxury in Every Loaf</div>
    <p className='aboutp'>At De Rich Bakery, every loaf starts with passion and quality ingredients. Founded by a dedicated mother with a love for baking, we’ve grown into a trusted source for fresh, delicious, and affordable bread.

From soft loaves to golden pastries, everything is made with care and consistency. Our goal is simple: serve the freshest and most satisfying baked products every day.
<p>
  <br/>
  <br/>
<div className='inf'><i class="icn bi bi-geo-alt-fill"></i> Address: Alimosho, 102213, Lagos</div>
<br/>
<div className='inf'><i className="bi bi-telephone-fill icn"></i> Phone: +234 706 978 9553</div>

</p>
</p></div>
  </div>
</div>
    </div>
  )
}

export default About
