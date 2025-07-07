import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="6th" className="p-5 h-100 border-0">
        <div className="container">
          <h2 data-aos="fade-up" className="fs-2 p-5">
            CONTACT US
          </h2>
          <div className="row px-5" id="5th">
            <div className="col-md-6">
              <form action="\">
                <input
                  data-aos="fade-up"
                  type="text"
                  placeholder="Your name"
                  className="form-control rounded-0 mb-3 p-3 border-0 shadow"
                />
                <input
                  data-aos="fade-up"
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control rounded-0 mb-3 p-3 shadow border-0"
                />
                <input
                  data-aos="fade-up"
                  type="email"
                  placeholder="Email"
                  className="form-control rounded-0 mb-3 p-3 shadow border-0"
                />
                <textarea
                  data-aos="fade-up"
                  name=""
                  placeholder="Messege"
                  style={{ height: 150 }}
                  className="form-control rounded-0 p-3 shadow border-0"
                  defaultValue={""}
                />
                <a href="" className="text-decoration-none px-2">
                  <div
                    data-aos="fade-up"
                    className="btn btn-primary my-3 py-2 px-5 text-white"
                  >
                    Send
                  </div>
                </a>
              </form>
            </div>
            <div className="col-md-6">
              <iframe
                className="w-100 h-100 mb-3 bg-white border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.775281722194!2d71.5295182738037!3d29.66829463629776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b0d5e81bfc16f%3A0x6335ebeec830dd35!2sAGS%20Amina%20Girls%20Higher%20Secondary%20school!5e0!3m2!1sen!2s!4v1738283748633!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>    </div>
  )
}

export default Contact