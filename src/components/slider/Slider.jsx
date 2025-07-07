import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import kiran from '../../images/testimonials/kiran1.png';
import jaweria from '../../images/testimonials/jaweria.jpg';
import sonia from '../../images/testimonials/sonia.jpg';

const Slider = () => {
    return (
        <div className="container my-5">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="row p-4 bg-light rounded">
                            <div className="col-2">
                                <img src={kiran} className="w-100 rounded-circle" alt="Kiran" />
                            </div>
                            <div className="col-10 fs-4">
                                <p className="fw-bold mb-1">I am Kiran Shahzadi!</p>
                                <p>
                                    I just wanted to say I’m really impressed with your work as a web developer.
                                    Your designs look clean, and I can tell you’re putting effort into making your sites responsive and user-friendly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="row p-4 bg-light rounded">
                            <div className="col-2">
                                <img src={jaweria} className="w-100 rounded-circle" alt="Jaweria" />
                            </div>
                            <div className="col-10 fs-4">
                                <p className="fw-bold mb-1">I'm Jaweria Noor</p>
                                <p>
                                    Great work! Your attention to detail really stands out, and the way you’ve been implementing different components
                                    shows that you're learning fast and applying what you know effectively.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="row p-4 bg-light rounded">
                            <div className="col-2">
                                <img src={sonia} className="w-100 rounded-circle" alt="Sonia" />
                            </div>
                            <div className="col-10 fs-4">
                                <p className="fw-bold mb-1">I'm Sonia Khan</p>
                                <p>
                                    You have shown great proficiency in modern web technologies such as HTML5, CSS, JavaScript. Your ability to turn design mockups into responsive, accessible, and user-friendly websites is impressive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
