import React from 'react'
import './Footer.css'
import FooterStrip from './FooterStrip'

const Footer = () => {
  return (
    <>
      <FooterStrip />
      <div className="footer" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-md-3">
              <div className="footer-img">
                <img src="/logo-icons/drishtiqon-logo.png" alt="" />
              </div>
              <p>DrishtiQon helps growing businesses streamline operations, improve visibility, and make faster decisions through a unified ERP ecosystem.</p>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 mb-lg-0 mb-md-3">
              <div className="row">
                <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                  <div className="footer-list">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="#">Solutions</a></li>
                      <li><a href="#">Modules</a></li>
                      <li><a href="#">Industries</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Resources</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                  <div className="footer-list">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="#">Solutions</a></li>
                      <li><a href="#">Modules</a></li>
                      <li><a href="#">Industries</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Resources</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                  <div className="footer-list">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="#">Solutions</a></li>
                      <li><a href="#">Modules</a></li>
                      <li><a href="#">Industries</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Resources</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-3">
                  <div className="footer-list">
                    <h4>Contact</h4>
                    <ul>
                      <li><a href="#">hello@drishtiqon.com</a></li>
                      <li><a href="#">+91 80 4719 3000</a></li>
                      <li><a href="#">India</a></li>

                    </ul>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 mb-lg-0 mb-md-3">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30131.387810532062!2d73.10998005880109!3d19.263941959772776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79687b845489b%3A0x524d05a946a75ba5!2sKhadakpada%2C%20Kalyan%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1780644546470!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer