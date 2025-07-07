import React from 'react'
import company1 from '../../images/campanies/Service Illustration.png'
import company2 from '../../images/campanies/Style=01.png'
import company3 from '../../images/campanies/Style=03.png'
const Services = () => {
    return (
        <div>
            <section className="section-3 px-5 py-3 h-100 border-0" id="3rd">
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{ color: "rgb(12, 12, 82)" }}>
                            <h2>My Services</h2>
                            <p className="fs-5">
                                Some of my common services are given below. Look at my services:
                            </p>
                        </div>
                        {/* Card 1 */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card bg-body-tertiary h-100 border-0 text-center d-flex flex-column">
                                <img
                                    src={company1}
                                    className="w-100 p-3"
                                    loading="lazy"
                                    alt="Landing Page Designing"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h6 data-aos="fade-up" className="fw-bolder fs-5 my-3">
                                        Landing Page Designing
                                    </h6>
                                    <p className="fs-5 text-start mt-auto">
                                        I specialize in designing landing pages, portfolios, or small
                                        business sites. I deliver functional designs that reflect your
                                        brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card bg-body-tertiary h-100 border-0 text-center d-flex flex-column">
                                <img
                                    src={company2}
                                    className="w-100 p-3"
                                    loading="lazy"
                                    alt="Static Page Designing"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h6 data-aos="fade-up" className="fw-bolder fs-5 my-3">
                                        Static Page Designing
                                    </h6>
                                    <p className="fs-5 text-start mt-auto">
                                        I design high-quality static pages that load fast, look great on
                                        all devices, and offer a seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card bg-body-tertiary h-100 border-0 text-center d-flex flex-column">
                                <img
                                    src={company3}
                                    className="w-100 p-3"
                                    loading="lazy"
                                    alt="Frontend Design"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h6 data-aos="fade-up" className="fw-bolder fs-5 my-3">
                                        Frontend Design
                                    </h6>
                                    <p className="fs-5 text-start mt-auto">
                                        I create responsive frontend interfaces that look amazing and
                                        work flawlessly across all devices and browsers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services