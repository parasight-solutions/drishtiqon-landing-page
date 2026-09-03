import React, { useState } from "react";
import "./BookADemo.css";
import { ShieldCheck, Clock3, Star } from "lucide-react";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
};

const BookADemo = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear previous status when user starts editing again
        if (submitStatus.message) {
            setSubmitStatus({
                type: "",
                message: "",
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({
            type: "",
            message: "",
        });

        try {
            const response = await fetch("/api/book-demo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to submit the form."
                );
            }

            setSubmitStatus({
                type: "success",
                message:
                    "Thank you! Your demo request has been submitted. We’ll get back to you within 24 hours.",
            });

            // Clear form after successful submission
            setFormData(initialFormData);
        } catch (error) {
            console.error("Book A Demo submission error:", error);

            setSubmitStatus({
                type: "error",
                message:
                    error.message ||
                    "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="book-demo-section">
            <div className="container">
                <div className="book-demo-wrapper">

                    {/* LEFT CONTENT */}
                    <div className="book-demo-content">
                        <h1>
                            See how Drishtiqon fits into your team’s workflows.
                        </h1>

                        <p className="book-demo-description">
                            A personalized demo, built around your team’s
                            challenges, led by experts who understand what
                            matters.
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
                                        autoComplete="given-name"
                                        required
                                        disabled={isSubmitting}
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
                                        autoComplete="family-name"
                                        required
                                        disabled={isSubmitting}
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
                                    autoComplete="email"
                                    required
                                    disabled={isSubmitting}
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
                                        autoComplete="tel"
                                        required
                                        disabled={isSubmitting}
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
                                        disabled={isSubmitting}
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

                            {/* STATUS MESSAGE */}
                            {submitStatus.message && (
                                <div
                                    className={`book-demo-status ${submitStatus.type}`}
                                    role="alert"
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                className="book-demo-submit"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Book A Demo"}
                                </span>

                                <span className="submit-arrow">
                                    →
                                </span>
                            </button>

                            {/* TRUST ITEMS */}
                            <div className="book-demo-trust">

                                <div className="trust-item">
                                    <span>
                                        <ShieldCheck
                                            size={12}
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p>Secure &amp; Private</p>
                                </div>

                                <div className="trust-item">
                                    <span>
                                        <Clock3
                                            size={12}
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p>Response in 24h</p>
                                </div>

                                <div className="trust-item">
                                    <span>
                                        <Star
                                            size={11}
                                            fill="currentColor"
                                        />
                                    </span>

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

