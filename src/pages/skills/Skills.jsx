import React from 'react'

const Skills = () => {
    return (
        <div>
            <section className="container h-100 p-5 border-0" id="4th">
                <h2>MY SKILLS</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between py-2">
                            <div className="fw-bold">HTML</div>
                            <div className="fw-bold">85%</div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar rounded-5 bg-primary"
                                role="progressbar"
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "85%" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between py-2">
                            <div className="fw-bold">CSS</div>
                            <div className="fw-bold">80%</div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar rounded-5 border bg-primary"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between py-2">
                            <div className="fw-bold">Bootstrap</div>
                            <div className="fw-bold">75%</div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar rounded-5 border bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between py-2">
                            <div className="fw-bold">Javascript</div>
                            <div className="fw-bold">45%</div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar rounded-5 border bg-primary"
                                role="progressbar"
                                aria-valuenow={45}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "45%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills