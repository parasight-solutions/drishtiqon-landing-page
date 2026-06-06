import React from 'react'
import './Banner.css'
import playButton from '/logo-icons/play-btn.png'
import bannerImage from '/section-images/banner-img.png'


const Banner = () => {
    return (
        <section className="banner pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-md-3 mb-sm-3 d-flex align-items-center">
                        <div className="banner-content">
                            <h1>One <span>Platform</span>. <br /> Complete <span>Business</span> Control.</h1>
                            <p>DrishtIQon ERP unifies Finance, Procurement, Inventory, Production, Sales, and Warehouse operations into one intelligent platform. Streamline workflows, gain real-time visibility, and make faster decisions with complete control over your business.</p>
                            <div className="btn-group gap-lg-3 gap-md-3 gap-sm-3 gap-1">
                                <a href="#" className="common-btn">
                                    <p>Book A Demo</p>
                                </a>
                                <a href="#" className="common-btn">
                                    <p>Explore Platform</p>
                                    <img src={playButton} alt="play button" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                            <img src={bannerImage} alt="banner image" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner