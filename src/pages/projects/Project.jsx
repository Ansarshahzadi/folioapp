import React from 'react'

import Carousel from '../../components/carousel/Carousel'

const Project = () => {
    return (
        <div>
            <section className="section-2 h-100 border-0" id="2nd">
                <div className="container p-5">
                    <div className="row flex-sm-column-reverse flex-md-row">
                        <div className="col">
                            <h2 className="">Projects</h2>
                            <p className="fs-5">
                                Some of the amazing projects made with the Bootstrap version-5 are
                                here. Let’s see:
                            </p>
                        </div>
                    </div>
                    <Carousel />
                </div>
            </section>
        </div>
    )
}

export default Project