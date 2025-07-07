import React from 'react'
import icon1 from '../../images/arts/phone-line.png'
import icon2 from '../../images/arts/mail-fill.png'
const Footer = () => {
  return (
    <div>
      <section
        className="container-fluid py-5 h-100 border-0 bg-body-tertiary"
        id="7th"
      >

        <div className="container   ">
          <div className="row ">
            <div className="col-md-6">
              <h3 data-aos="fade-up" className=" ps-5 fw-bold mb-3">
                Quick Link
              </h3>
              <div className="row ps-5" data-aos="fade-up">
                <div className="col-sm-6 pb-4">
                  <a
                    href="#carouselExampleSlidesOnly"
                    className="text-decoration-none text-center text-dark"
                  >
                    Home
                  </a>
                </div>
                <div className="col-sm-4 pb-4">
                  <a
                    href="#3rd"
                    className="text-decoration-none text-center  text-dark"
                  >
                    About
                  </a>
                </div>
                <div className="col-sm-6 pb-4">
                  <a
                    href="#4th"
                    className="text-decoration-none text-center  text-dark"
                  >
                    Projects
                  </a>
                </div>
                <div className="col-sm-6 pb-4">
                  <a
                    href="#5th"
                    className="text-decoration-none text-center  text-dark"
                  >
                    Services
                  </a>
                </div>
                <div className="col-sm-6 pb-4">
                  <a
                    href="#6th"
                    className="text-decoration-none text-center  text-dark"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6  text-dark fw-bold mb-3 px-5">
              <div className="container text-dark  bg-body-tertiary  mb-3">
                <div className="row " data-aos="fade-up">
                  <div className="col-md-12 text-start">
                    <a href="" className="text-decoration-none text-dark fw-bold">
                      <img src={icon1} alt="" className="me-4 p-2 mb-3  bg-primary rounded" />
                      Call: +92 328 7315641
                    </a>
                  </div>
                  <div className="col-md-12 text-start">
                    <a href="" className="text-decoration-none fw-bold  text-dark">
                      <img src={icon2} alt="" height={48} className="me-4 p-2  bg-primary rounded" />
                      ansarilyas.itroots@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="social-icon d-flex">
                <a href="" className='text-white rounded px-3  ms-2 py-2 me-4 bg-primary'>
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="" className='text-white rounded px-3 py-2 me-4 bg-primary'>
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="" className='text-white rounded px-3 py-2 me-4 bg-primary'>
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="" className='text-white rounded px-3 py-2 me-2 bg-primary'>
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-top border-2 m-3"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 fs-5 col-md-8 text-capitalize text-dark ">
              <strong>  2025 Redesign by pladges student: </strong>Ansar Ilyas👋 @AGS_ADP_Senior
            </div>
            <div className="col-12 col-md-4 text-end text-dark fs-5">
              <strong>Instructor: </strong>
              Mr. Tanveer Ahmad
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Footer