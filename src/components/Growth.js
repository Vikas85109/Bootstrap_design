import React from 'react'

const Growth = () => {
    return (
  
      <div className="container-fluid">
          <div className="row justify-content-evenly mt-2 mb-5">
          <div className="col-md-5  pt-3">
                  <img src="https://www.pinpng.com/pngs/m/317-3177281_crescimento-png-illustration-transparent-png.png" alt="" className='img-fluid'/>
              </div>
          <div className="col-md-5  pt-3">
           <h5 className='mt-3'>Web Development</h5>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{width: "25%"}}></div>
            </div>
            <h5 className='mt-3'>App Development</h5>
            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style={{ width: "50%" }}></div>
            </div>

            <h5 className='mt-3'>React Development</h5>
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-warning" style={{ width: "75%" }}></div>
            </div>

            <h5 className='mt-3'>Frontend Development</h5>
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style={{ width: "100%" }}></div>
            </div>

            
              </div>
          </div>
            </div>
       
  )
}

export default Growth