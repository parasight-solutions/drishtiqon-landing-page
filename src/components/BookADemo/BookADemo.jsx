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

const initialErrors = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
};

const BookADemo = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: "",
        message: "",
    });

    // -----------------------------
    // VALIDATION
    // -----------------------------

    const validateField = (name, value) => {
        const trimmedValue = value.trim();

        switch (name) {
            case "firstName":
                if (!trimmedValue) {
                    return "First name is required.";
                }

                if (trimmedValue.length < 2) {
                    return "First name must be at least 2 characters.";
                }

                if (trimmedValue.length > 50) {
                    return "First name must be less than 50 characters.";
                }

                if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(trimmedValue)) {
                    return "Please enter a valid first name.";
                }

                return "";

            case "lastName":
                if (!trimmedValue) {
                    return "Last name is required.";
                }

                if (trimmedValue.length < 2) {
                    return "Last name must be at least 2 characters.";
                }

                if (trimmedValue.length > 50) {
                    return "Last name must be less than 50 characters.";
                }

                if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(trimmedValue)) {
                    return "Please enter a valid last name.";
                }

                return "";

            case "email":
                if (!trimmedValue) {
                    return "Work email is required.";
                }

                if (trimmedValue.length > 254) {
                    return "Email address is too long.";
                }

                if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        trimmedValue
                    )
                ) {
                    return "Please enter a valid email address.";
                }

                return "";

            case "phone":
                if (!trimmedValue) {
                    return "Phone number is required.";
                }

                // Allows international numbers such as:
                // +919988776655
                // +1 555 123 4567
                // +44 20 1234 5678
                const cleanPhone = trimmedValue.replace(/[\s()-]/g, "");

                if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
                    return "Please enter a valid phone number.";
                }

                return "";

            case "companySize":
                if (!trimmedValue) {
                    return "Please select your company size.";
                }

                const validCompanySizes = [
                    "1-10",
                    "11-50",
                    "51-200",
                    "201-500",
                    "500+",
                ];

                if (!validCompanySizes.includes(trimmedValue)) {
                    return "Please select a valid company size.";
                }

                return "";

            default:
                return "";
        }
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field]);

            if (error) {
                newErrors[field] = error;
            } else {
                newErrors[field] = "";
            }
        });

        setErrors(newErrors);

        return !Object.values(newErrors).some((error) => error);
    };

    // -----------------------------
    // INPUT CHANGE
    // -----------------------------

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate field after user has entered something
        if (value.trim()) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name, value),
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

        // Clear success/error message
        if (submitStatus.message) {
            setSubmitStatus({
                type: "",
                message: "",
            });
        }
    };

    // -----------------------------
    // INPUT BLUR
    // -----------------------------

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    // -----------------------------
    // FORM SUBMIT
    // -----------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        // Validate everything before sending
        const isValid = validateForm();

        if (!isValid) {
            setSubmitStatus({
                type: "error",
                message: "Please correct the highlighted fields.",
            });

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
                body: JSON.stringify({
                    firstName: formData.firstName.trim(),
                    lastName: formData.lastName.trim(),
                    email: formData.email.trim().toLowerCase(),
                    phone: formData.phone.trim(),
                    companySize: formData.companySize,
                }),
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

            // Clear form
            setFormData(initialFormData);
            setErrors(initialErrors);
        } catch (error) {
            console.error("Book A Demo submission error:", error);

            setSubmitStatus({
                type: "error",
                message:
                    error.message ||
                    "Something went wrong. Please try again later.",
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

                        <form onSubmit={handleSubmit} noValidate>

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
                                        onBlur={handleBlur}
                                        autoComplete="given-name"
                                        maxLength={50}
                                        aria-invalid={!!errors.firstName}
                                        aria-describedby={
                                            errors.firstName
                                                ? "firstName-error"
                                                : undefined
                                        }
                                        disabled={isSubmitting}
                                    />

                                    {errors.firstName && (
                                        <p
                                            id="firstName-error"
                                            className="form-error"
                                        >
                                            {errors.firstName}
                                        </p>
                                    )}

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
                                        onBlur={handleBlur}
                                        autoComplete="family-name"
                                        maxLength={50}
                                        aria-invalid={!!errors.lastName}
                                        aria-describedby={
                                            errors.lastName
                                                ? "lastName-error"
                                                : undefined
                                        }
                                        disabled={isSubmitting}
                                    />

                                    {errors.lastName && (
                                        <p
                                            id="lastName-error"
                                            className="form-error"
                                        >
                                            {errors.lastName}
                                        </p>
                                    )}

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
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    maxLength={254}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={
                                        errors.email
                                            ? "email-error"
                                            : undefined
                                    }
                                    disabled={isSubmitting}
                                />

                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="form-error"
                                    >
                                        {errors.email}
                                    </p>
                                )}

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
                                        onBlur={handleBlur}
                                        autoComplete="tel"
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={
                                            errors.phone
                                                ? "phone-error"
                                                : undefined
                                        }
                                        disabled={isSubmitting}
                                    />

                                    {errors.phone && (
                                        <p
                                            id="phone-error"
                                            className="form-error"
                                        >
                                            {errors.phone}
                                        </p>
                                    )}

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
                                        onBlur={handleBlur}
                                        aria-invalid={!!errors.companySize}
                                        aria-describedby={
                                            errors.companySize
                                                ? "companySize-error"
                                                : undefined
                                        }
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

                                    {errors.companySize && (
                                        <p
                                            id="companySize-error"
                                            className="form-error"
                                        >
                                            {errors.companySize}
                                        </p>
                                    )}

                                </div>

                            </div>

                            {/* FORM STATUS */}
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

                                    <p>
                                        Secure &amp; Private
                                    </p>
                                </div>

                                <div className="trust-item">
                                    <span>
                                        <Clock3
                                            size={12}
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p>
                                        Response in 24h
                                    </p>
                                </div>

                                <div className="trust-item">
                                    <span>
                                        <Star
                                            size={11}
                                            fill="currentColor"
                                        />
                                    </span>

                                    <p>
                                        No Commitment
                                    </p>
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

