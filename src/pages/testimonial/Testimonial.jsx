import React from 'react'

import Slider from '../../components/slider/Slider'
const Testimonial = () => {
    return (
        <div>
            <section className="h-100  border-0" id="5th">
                <div className="container py-5 ">
                    <div className="row ">
                        <div className="col-12">
                            <h2 className="px-5">Testimonials</h2>
                        </div>
                    </div>
                    <Slider />
                </div>
            </section>
        </div>
    )
}

export default Testimonial