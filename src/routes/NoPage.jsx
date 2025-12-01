import React from 'react'
import img404 from './404img/404error.png'
import './NoPage.css'


const NoPage = () => {
  return (
    <div>
      <div className='no-page'>
      <div className='row m-0 mt-5'>
        <div className='col-md-12 text-center'>
          <div className='box'>
            <img src={img404} alt="404 Error" className='img-fluid' style={{height: '200px'}}/>

            <h1 className='text-danger'>- 404 -</h1>
            <h3 className='text-secondary'>Oops! Page Not Found</h3>
            <div className='btn btn-danger mt-3'><a href='/' className='text-white text-decoration-none'>Go to Home</a></div>    
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default NoPage
