import React from 'react'

const MiddlePart = () => {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 mt-5 mb-2">
                  <h3 className="display-6 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptatibus optio vero similique</h3>
              </div>
          </div>

          <div className="row justify-content-evenly text-center pt-3 pb-3">
              <div className="col-md-3 mt-5">
                  <h1><i class="bi bi-file-code-fill text-primary"></i></h1>
                  <h5>Lorem, ipsum dolor sit amet </h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magnam non id laudantium animi. Quo pariatur dolores molestias repellendus eaque.</p>
              </div>
              <div className="col-md-3 mt-5">
                  <h1> <i class="bi bi-easel-fill text-danger"></i></h1>
                  <h5>Lorem ipsum dolor sit amet.</h5>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magnam non id laudantium animi. Quo pariatur dolores molestias repellendus eaque.</p>
              </div>
              <div className="col-md-3 mt-5">
                  <h1> <i class="bi bi-calendar3-range-fill text-success"></i></h1>
                  <h5>Lorem ipsum dolor sit.</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas officia veritatis vero, assumenda incidunt, quisquam fuga libero cum natus, obcaecati inventore nisi neque nihil.</p>
              </div>
              <hr />
          </div>

    </div>
  )
}

export default MiddlePart