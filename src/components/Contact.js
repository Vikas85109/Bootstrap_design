import React from 'react'

const Contact = () => {
  return (
      <div className="container-fluid">
          <div className="row justify-content-evenly pt-5 pb-3" style={{backgroundColor:"#f1f1f1"}}>
              <div className="col-md-5 mt-3">
                  <h5 className='mt-2 mb-4' >Contact Form</h5>
                  <form>
                      <div class="mb-3">
                          <label for="name" class="form-label">Full Name</label>
                          <input type="text" class="form-control" id="name" />
                      </div>
    
                      <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>

                      <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button type="submit" class="btn btn-danger">Submit</button>
                  </form>
              </div>
              <div className="col-md-5 mt-5">
                  <h5 >Address</h5>
                  <p>
                      Plot No.1 Phase, 3A, Imt Manesar,<br />
                      Gurugram, Haryana 122051 <br />
                      
                      Phone: +91 8510928039
                  </p>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14045.12260014888!2d76.93439097707754!3d28.350363520477394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3c47f9b1ebf3%3A0x988bcd8b091e427b!2sManesar%2C%20Gurugram%2C%20Haryana%20122051!5e0!3m2!1sen!2sin!4v1676745568923!5m2!1sen!2sin" st height="250" style={{border:"0", width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
   </div>
  )
}

export default Contact