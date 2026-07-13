import React from "react";
import "./Plans.css";
import { Link } from "react-router-dom";

const Plans = ({ title, description, plans, containerClass = "", }) => {
    return (
        <section className="plans pt-0">
            <div className={`container ${containerClass}`}>

                <div className="row mb-lg-5 mb-4 text-center">
                    <div className="common-title" data-aos="fade-up">
                        <h2>{title}</h2>
                        <p className="mb-0">{description}</p>
                    </div>
                </div>

                <div className="row">
                    {plans.map((plan, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className={`card ${plan.cardClass || ""}`}>

                                {plan.pill && (
                                    <div className="pill">
                                        <p>{plan.pill}</p>
                                    </div>
                                )}

                                <div className="card-header">
                                    <div className="image">
                                        <img src={plan.icon} alt={plan.name} />
                                    </div>

                                    <div className="header-content">
                                        <h6>{plan.name}</h6>
                                        <p>{plan.shortDescription}</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className="mt-2">{plan.description}</p>
                                    <div className="need-card-price">
                                        <span className="amount">{plan.price}</span>
                                        <span className="duration">{plan.duration}</span>
                                    </div>

                                    <p>{plan.billing}</p>

                                    <div className="list-wrapper mb-3">
                                        <h6>{plan.featurehead}</h6>
                                        {plan.features.map((feature, i) => (
                                            <div className="list" key={i}>
                                                <img src={plan.tickIcon} alt="" />
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                        <h6>{plan.bestfor}</h6>
                                        <p className="mb-0">{plan.bestdescription}</p>
                                    </div>
                                </div>

                                {plan.note && <h6>{plan.note}</h6>}

                                <div className="card-footer">
                                    <Link to={plan.buttonLink} className="common-btn">
                                        <p>{plan.buttonText}</p>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Plans;