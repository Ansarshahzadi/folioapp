import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/campanies/Furniture.png';
import img2 from '../../images/campanies/avatar.png';
import img3 from '../../images/campanies/sushi club.png';
import img4 from '../../images/campanies/course card.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active py-3 text-center fw-bold"
            style={{ overflow: 'visible', position: 'relative' }}
          >
            <div className="row" style={{ overflow: 'visible', position: 'relative' }}>
              {/* Project 1 */}
              <div className="col-sm-12 col-md-3 mb-3">
                <Link
                  to="/projects/furniture"
                  target="_blank"
                  className="image-wrapper d-block rounded"
                >
                  <img src={img1} height={250} width={240} alt="Furniture Site" />
                  <div className="image-overlay">
                    <div className="project-title">Furniture Site</div>
                    <p>HTML, CSS, JavaScript, Bootstrap</p>
                  </div>
                </Link>
              </div>

              {/* Project 2 */}
              <div className="col-sm-12 col-md-3 mb-3">
                <a
                  href="./projects/portfolio design/index.html"
                  target="_blank"
                  className="image-wrapper d-block rounded"
                  rel="noreferrer"
                >
                  <img src={img4} height={250} width={240} alt="Portfolio" />
                  <div className="image-overlay">
                    <div className="project-title">Personal Portfolio</div>
                    <p>HTML, CSS, JavaScript, Bootstrap</p>
                  </div>
                </a>
              </div>

              {/* Project 3 */}
              <div className="col-sm-12 col-md-3 mb-3">
                <a
                  href="./projects/figma template sushi/index.html"
                  target="_blank"
                  className="image-wrapper d-block rounded"
                  rel="noreferrer"
                >
                  <img src={img3} height={250} width={240} alt="Sushi Club" />
                  <div className="image-overlay">
                    <div className="project-title">Sushi Design</div>
                    <p>HTML, CSS, JavaScript, Bootstrap</p>
                  </div>
                </a>
              </div>

              {/* Project 4 */}
              <div className="col-sm-12 col-md-3 mb-3">
                <a
                  href="./projects/Avatar Design/index1.html"
                  target="_blank"
                  className="image-wrapper d-block rounded"
                  rel="noreferrer"
                >
                  <img src={img2} height={250} width={240} alt="Avatar Design" />
                  <div className="image-overlay">
                    <div className="project-title">Avatar Design</div>
                    <p>HTML, CSS, JavaScript, Bootstrap</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .image-wrapper {
          position: relative;
          overflow: visible;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(13, 110, 253, 0.8);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 999;
          border-radius: 0.5rem;
          pointer-events: auto;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .carousel-item,
        .row {
          overflow: visible !important;
          position: relative;
        }

        .carousel-control-prev,
        .carousel-control-next {
          z-index: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
