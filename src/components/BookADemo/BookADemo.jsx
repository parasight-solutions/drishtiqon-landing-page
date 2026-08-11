import React, { useState } from "react";
import "./BookADemo.css";
import { ShieldCheck, Clock3, Star } from "lucide-react";


const BookADemo = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companySize: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Book A Demo Form:", formData);

        // Add your API call here later
    };

    return (
        <section className="book-demo-section">
            <div className="container">

                <div className="book-demo-wrapper">

                    {/* LEFT CONTENT */}
                    <div className="book-demo-content">

                        <h1>
                            Book A Demo{" "}
                            <span>Today.</span>
                        </h1>

                        <p className="book-demo-description">
                            See how DrishtiQon unifies Finance, Procurement,
                            Inventory, Production, Sales, and Warehouse in
                            one intelligent platform.
                        </p>

                        <div className="book-demo-benefits">

                            <div className="book-demo-benefit">
                                <span className="benefit-icon">✓</span>
                                <p>
                                    Streamline your entire business workflow
                                    from procurement to sales.
                                </p>
                            </div>

                            <div className="book-demo-benefit">
                                <span className="benefit-icon">✓</span>
                                <p>
                                    Gain real-time insights with unified
                                    financial and inventory reporting.
                                </p>
                            </div>

                            <div className="book-demo-benefit">
                                <span className="benefit-icon">✓</span>
                                <p>
                                    Scale effortlessly with a platform designed
                                    for growing enterprises.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* FORM CARD */}
                    <div className="book-demo-card">

                        <form onSubmit={handleSubmit}>

                            {/* FIRST + LAST NAME */}
                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="firstName">
                                        First Name <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Priya"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="lastName">
                                        Last Name <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Mehta"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>


                            {/* EMAIL */}
                            <div className="form-group">

                                <label htmlFor="email">
                                    Work Email <span>*</span>
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="priya@company.co.in"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* PHONE + COMPANY SIZE */}
                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="phone">
                                        Phone Number <span>*</span>
                                    </label>

                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+919988776655"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="companySize">
                                        Company Size <span>*</span>
                                    </label>

                                    <select
                                        id="companySize"
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select size
                                        </option>

                                        <option value="1-10">
                                            1 - 10
                                        </option>

                                        <option value="11-50">
                                            11 - 50
                                        </option>

                                        <option value="51-200">
                                            51 - 200
                                        </option>

                                        <option value="201-500">
                                            201 - 500
                                        </option>

                                        <option value="500+">
                                            500+
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                className="book-demo-submit"
                            >
                                <span>
                                    Book A Demo — It Is Free
                                </span>

                                <span className="submit-arrow">
                                    →
                                </span>
                            </button>


                            {/* TRUST ITEMS */}
                            <div className="book-demo-trust">

                                <div className="trust-item">
                                    <span>   <ShieldCheck size={12} strokeWidth={2} /></span>
                                    <p>Secure &amp; Private</p>
                                </div>

                                <div className="trust-item">
                                    <span> <Clock3 size={12} strokeWidth={2} /></span>
                                    <p>Response in 24h</p>
                                </div>

                                <div className="trust-item">
                                    <span><Star size={11} fill="currentColor" /></span>
                                    <p>No Commitment</p>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default BookADemo;