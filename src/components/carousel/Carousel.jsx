import './Style.css'
import React from 'react'

import img1 from '../../images/campanies/Furniture.png'
import img2 from '../../images/campanies/avatar.png'
import img3 from '../../images/campanies/sushi club.png'
import img4 from '../../images/campanies/course card.png'
import { Link } from 'react-router-dom'
const Carousel = () => {
    return (
        <div>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active py-3 text-center fw-bold">
                        <div className="row">
                            {/* Project 1 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    to="/projects/furniture"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img1}
                                        height={250}
                                        width={240}
                                        alt="Furniture Site"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Furniture Site</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 2 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/portfolio design/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img4}
                                        height={250}
                                        width={240} alt="Portfolio"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Personal Portfolio</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 3 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/figma template sushi/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img3}
                                        height={250}
                                        width={240} alt="Sushi Club"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Sushi Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 4 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/Avatar Design/index1.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img2}
                                        height={250}
                                        width={240} alt="Avatar Design"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Avatar Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item py-3 text-center fw-bold">
                        <div className="row">
                            {/* Project 1 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/furniture/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img1}
                                        height={250}
                                        width={240} alt="Furniture Site"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Furniture Site</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 2 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/portfolio design/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img4}
                                        height={250}
                                        width={240} alt="Portfolio"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Personal Portfolio</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 3 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/figma template sushi/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img3}
                                        height={250}
                                        width={240} alt="Sushi Club"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Sushi Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 4 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/Avatar Design/index1.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img2}
                                        height={250}
                                        width={240} alt="Avatar Design"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Avatar Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item py-3 text-center fw-bold">
                        <div className="row">
                            {/* Project 1 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/furniture/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img1}
                                        height={250}
                                        width={240} alt="Furniture Site"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Furniture Site</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 2 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/portfolio design/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img4}
                                        height={250}
                                        width={240} alt="Portfolio"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Personal Portfolio</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 3 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/figma template sushi/index.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img3}
                                        height={250}
                                        width={240} alt="Sushi Club"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Sushi Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                            {/* Project 4 */}
                            <div className="col-sm-12 col-md-3 mb-3">
                                <Link
                                    href="./projects/Avatar Design/index1.html"
                                    target="_blank"
                                    className="image-wrapper d-block rounded"
                                >
                                    <img
                                        src={img2}
                                        height={250}
                                        width={240} alt="Avatar Design"
                                    />
                                    <div className="image-overlay">
                                        <div className="project-title">Avatar Design</div>
                                        <p>HTML, CSS, JavaScript, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    )
}

export default Carousel