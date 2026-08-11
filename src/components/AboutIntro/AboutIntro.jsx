import React from "react";
import "./AboutIntro.css";

const AboutIntro = ({
    title = "About Us",
    description = "",
    secondDescription = "",
}) => {
    return (
        <section className="about-intro">
            <div className="container">
                <div className="about-intro-box">
                    <div className="about-intro-content">
                        <h1>{title}</h1>

                        {description && (
                            <p>{description}</p>
                        )}

                        {secondDescription && (
                            <p>{secondDescription}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;