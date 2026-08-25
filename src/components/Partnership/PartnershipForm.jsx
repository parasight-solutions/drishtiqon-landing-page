import React from "react";
import "./PartnershipForm.css";
import { CircleCheck } from "lucide-react";

const benefits = [
    {
        title: "Reviewed in 2 business days",
        description: "Profile, region and industry feasibility check.",
    },
    {
        title: "No upfront program fee",
        description: "Certification and sandbox access are included.",
    },
    {
        title: "Dedicated alliance manager",
        description: "A single point of contact from day one.",
    },
];

const PartnershipForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="partnership-section pt-0">
            <div className="container ">
                <div className="row align-items-center partnership-row">
                    {/* Left Content */}
                    <div className="col-lg-6 col-xl-6">
                        <div className="partnership-content">
                            <h2 className="partnership-heading">
                                Let's build your{" "}
                                <span className="partnership-highlight">partnership</span>
                            </h2>

                            <p className="partnership-description">
                                Tell us about your firm and we'll come back within two business
                                days with a program recommendation and margin sheet.
                            </p>

                            <div className="partnership-benefits">
                                {benefits.map((benefit, index) => (
                                    <div className="benefit-item" key={index}>
                                        <div className="benefit-icon">
                                    
                                            <CircleCheck />
                                        </div>

                                        <div className="benefit-content">
                                            <h3>{benefit.title}</h3>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="col-lg-6 col-xl-6">
                        <div className="partnership-form-card">
                            <form onSubmit={handleSubmit}>
                                <h3 className="form-heading">
                                    Become a{" "}
                                    <span className="partnership-highlight">Partner</span>
                                </h3>

                                {/* Partnership Type */}
                                <div className="form-field">
                                    <label htmlFor="partnershipType">
                                        Partnership Type<span>*</span>
                                    </label>

                                    <select
                                        id="partnershipType"
                                        name="partnershipType"
                                        className="partnership-input partnership-select"
                                        defaultValue="Affiliate Partner"
                                        required
                                    >
                                        <option value="Affiliate Partner">
                                            Affiliate Partner
                                        </option>
                                        <option value="Referral Partner">Referral Partner</option>
                                        <option value="Technology Partner">
                                            Technology Partner
                                        </option>
                                        <option value="Consulting Partner">
                                            Consulting Partner
                                        </option>
                                    </select>
                                </div>

                                {/* First + Last Name */}
                                <div className="row form-fields-row">
                                    <div className="col-md-6">
                                        <div className="form-field">
                                            <label htmlFor="firstName">
                                                First Name<span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="partnership-input"
                                                placeholder="Rahul"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-field">
                                            <label htmlFor="lastName">
                                                Last Name<span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="partnership-input"
                                                placeholder="Sharma"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Job Title */}
                                <div className="form-field">
                                    <label htmlFor="jobTitle">
                                        Job Title<span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        className="partnership-input"
                                        placeholder="Director — Consulting"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-field">
                                    <label htmlFor="email">
                                        Email<span>*</span>
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="partnership-input"
                                        placeholder="rahul@company.in"
                                        required
                                    />
                                </div>

                                {/* Phone + Company */}
                                <div className="row form-fields-row">
                                    <div className="col-md-6">
                                        <div className="form-field">
                                            <label htmlFor="phone">
                                                Phone Number<span>*</span>
                                            </label>

                                            <div className="phone-field">
                                                <div className="country-code">+91</div>

                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="partnership-input phone-input"
                                                    placeholder="98765 43210"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-field">
                                            <label htmlFor="company">
                                                Company Name<span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="partnership-input"
                                                placeholder="Sharma Business Solutions"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-action">
                                    <button type="submit" className="partner-submit-btn">
                                        Become a Partner
                                    </button>

                                    <p className="form-terms">
                                        By submitting your information, you agree to our Terms of
                                        Service and Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipForm;