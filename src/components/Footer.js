import React from 'react'

const Footer = () => {
  return (
      <div className="container-fluid bg-dark text-white">
          <div className="row justify-content-evenly pt-2 pb-5">
              <div className="col-md-3 pt-4">
                  <h5 className='pb-2'>Vikas Sharma</h5>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam quo consectetur fugiat quas temporibus, quos nulla cum tempora! Distinctio eum illum rerum exercitationem quaerat quisquam, consequatur delectus iste architecto perferendis ipsa cum debitis adipisci, sit asperiores 
                  </p>
              </div>
              <div className="col-md-3 pt-4">
                  <h5 className='pb-2'>Important Links</h5>
                  <p>
                      <a href="" className='text-white text-decoration-none'>Home</a><br />
                      <a href="" className='text-white text-decoration-none'>About Us</a><br />
                      <a href="" className='text-white text-decoration-none'>Contact Us</a><br />
                      <a href="" className='text-white text-decoration-none'>Our Team</a><br />
                      <a href="" className='text-white text-decoration-none'>Our Client</a>
                  </p>
                 
              </div>
              <div className="col-md-3 pt-4">
                  <h5 className='pb-2'>Contact Us</h5>
              
                  <p>
                      Plot No.1 Phase, 3A, Imt Manesar,<br />
                      Gurugram, Haryana 122051 <br />
                      Phone: +91 8510928039
                  </p>
              </div>
          </div>
    </div>
  )
}

export default Footer