import React from 'react'
import mypicture from '../../images/testimonials/newedited.png'
const Homepage = () => {
  return (
    <div>
      <section className="section-1  h-100 border-0 py-3" id="1st">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ps-5">
              <h1 className="mb-5 fw-bold">
                HEY 👋, I AM ANSAR ILYAS FRONTEND DEVELOPER
              </h1>
              <p className="my-5 fs-5">
                I am passionate for building responsive, user-friendly websites
                using HTML, CSS, JavaScript, and frameworks like React. I'm
                currently learning backend development with Node.js and exploring
                full-stack project building. I created this website to showcase my
                learning journey, share projects, and connect with others in tech.
              </p>
              <div className="btn btn-primary py-2 px-3 rounded">
                <a
                  href="./cv.html"
                  className="text-decoration-none text-white"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="col-lg-5 px-5">
              <img
                className="h-100 w-100 rounded-3"
                src={mypicture}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage