import React from 'react'
import './Banner.css'
import playButton from '/logo-icons/play-btn.png'
import bullets_tick from '/logo-icons/charm_circle-tick.png'
import bannerImage from '/section-images/banner-img.png'


const Banner = ({
    title,
    description,
    image,
    primaryBtn,
    secondaryBtn,
    bullets = [],
    showPlayIcon = false,
    bannerClass = "",
}) => {
    return (
        <section className="banner pt-4 pb-4">
            <div className="container">
                <div className="row">

                    {/* Left Content */}

                    <div className="col-lg-6 d-flex align-items-center">
                        <div className={`banner-content ${bannerClass}`}>

                            <h1>{title}</h1>

                            <p>{description}</p>

                            {/* Bullets */}

                            {bullets.length > 0 && (
                                <div className="banner-points">
                                    <div className="row">

                                        {bullets.map((item, index) => (
                                            <div className="col-6 mb-2 bullets" key={index}>
                                                <img src={bullets_tick} alt="" className='bullets_ticks' /> {item}
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            )}

                            <div className="btn-group gap-3">

                                <Link href={primaryBtn.link} className="common-btn">
                                    <p>{primaryBtn.text}</p>
                                </Link>

                                <link href={secondaryBtn.link} className="common-btn">

                                    <p>{secondaryBtn.text}</p>

                                    {showPlayIcon && (
                                        <img src={playButton} alt="" />
                                    )}

                                </link>

                            </div>

                        </div>
                    </div>

                    {/* Right Image */}

                    <div className="col-lg-6">

                        <div className="image">
                            <img src={image} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner