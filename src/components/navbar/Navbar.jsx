import React from 'react'
import myimg from '../../images/testimonials/navpic.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg py-3 px-5 position-sticky top-0 bg-body-tertiary"
        style={{ zIndex: 1030 }}
        id="navbar-example"
      >
        <Link
          to="/"
          className="text-decoration-none fw-bold fs-3 text-black"
          style={{ fontFamily: '"Brush Script MT", cursive' }}
        >
          <img
            src={myimg}
            height="50px"
            width="50px"
            className="rounded-circle me-3 ms-5"
            alt=""
          />
          Ansar Ilyas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/projects">
                Project
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/testimonial">
                Testimonials
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link my-2 mx-3 text-uppercase" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="pe-5">
            <button
              type="button"
              className="btn btn-primary"
              onclick="location.href='mailto:ansarilyas.itroots@gmail.com'"
            >
              Contact&nbsp;Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar