import nodemailer from "nodemailer";

const ALLOWED_COMPANY_SIZES = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+",
];

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function validateName(value, fieldName) {
    if (!value) {
        return `${fieldName} is required.`;
    }

    if (value.length < 2) {
        return `${fieldName} must be at least 2 characters.`;
    }

    if (value.length > 50) {
        return `${fieldName} must be less than 50 characters.`;
    }

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(value)) {
        return `Please enter a valid ${fieldName.toLowerCase()}.`;
    }

    return "";
}

function validateEmail(value) {
    if (!value) {
        return "Work email is required.";
    }

    if (value.length > 254) {
        return "Email address is too long.";
    }

    const emailRegex =
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
    }

    return "";
}

function validatePhone(value) {
    if (!value) {
        return "Phone number is required.";
    }

    const normalizedPhone = value.replace(/[\s()-]/g, "");

    if (!/^\+?[0-9]{7,15}$/.test(normalizedPhone)) {
        return "Please enter a valid phone number.";
    }

    return "";
}

function validateCompanySize(value) {
    if (!value) {
        return "Please select your company size.";
    }

    if (!ALLOWED_COMPANY_SIZES.includes(value)) {
        return "Please select a valid company size.";
    }

    return "";
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed.",
        });
    }

    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            companySize,
        } = req.body || {};

        const cleanFirstName =
            typeof firstName === "string"
                ? firstName.trim()
                : "";

        const cleanLastName =
            typeof lastName === "string"
                ? lastName.trim()
                : "";

        const cleanEmail =
            typeof email === "string"
                ? email.trim().toLowerCase()
                : "";

        const cleanPhone =
            typeof phone === "string"
                ? phone.trim()
                : "";

        const cleanCompanySize =
            typeof companySize === "string"
                ? companySize.trim()
                : "";

        // -----------------------------
        // VALIDATION
        // -----------------------------

        const firstNameError = validateName(
            cleanFirstName,
            "First name"
        );

        if (firstNameError) {
            return res.status(400).json({
                success: false,
                message: firstNameError,
            });
        }

        const lastNameError = validateName(
            cleanLastName,
            "Last name"
        );

        if (lastNameError) {
            return res.status(400).json({
                success: false,
                message: lastNameError,
            });
        }

        const emailError = validateEmail(cleanEmail);

        if (emailError) {
            return res.status(400).json({
                success: false,
                message: emailError,
            });
        }

        const phoneError = validatePhone(cleanPhone);

        if (phoneError) {
            return res.status(400).json({
                success: false,
                message: phoneError,
            });
        }

        const companySizeError =
            validateCompanySize(cleanCompanySize);

        if (companySizeError) {
            return res.status(400).json({
                success: false,
                message: companySizeError,
            });
        }

        // -----------------------------
        // ENVIRONMENT VARIABLES
        // -----------------------------

        if (
            !process.env.GMAIL_USER ||
            !process.env.GMAIL_APP_PASSWORD
        ) {
            console.error(
                "GMAIL_USER or GMAIL_APP_PASSWORD is missing."
            );

            return res.status(500).json({
                success: false,
                message:
                    "Email service is not configured correctly.",
            });
        }

        // -----------------------------
        // GMAIL TRANSPORTER
        // -----------------------------

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // -----------------------------
        // SEND EMAIL TO DRISHTIQON
        // -----------------------------

        await transporter.sendMail({
            from: `"Drishtiqon Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: cleanEmail,

            subject:
                `New Demo Request - ${cleanFirstName} ${cleanLastName}`,

            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>New Demo Request</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background:#f5f5f5;
                    font-family:Arial,Helvetica,sans-serif;
                ">

                    <div style="
                        max-width:600px;
                        margin:40px auto;
                        background:#ffffff;
                        border:1px solid #e5e5e5;
                        border-radius:10px;
                        overflow:hidden;
                    ">

                        <div style="
                            padding:24px;
                            background:#111111;
                            color:#ffffff;
                        ">

                            <h1 style="
                                margin:0;
                                font-size:24px;
                            ">
                                New Demo Request
                            </h1>

                            <p style="
                                margin:8px 0 0;
                                color:#cccccc;
                            ">
                                Someone requested a demo
                                through the Drishtiqon website.
                            </p>

                        </div>

                        <div style="padding:24px;">

                            <h2 style="
                                margin-top:0;
                                color:#111111;
                            ">
                                Contact Details
                            </h2>

                            <table
                                width="100%"
                                cellpadding="8"
                                cellspacing="0"
                                style="
                                    border-collapse:collapse;
                                    font-size:15px;
                                "
                            >

                                <tr>
                                    <td style="
                                        font-weight:bold;
                                        border-bottom:1px solid #eeeeee;
                                        width:150px;
                                    ">
                                        First Name
                                    </td>

                                    <td style="
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        ${escapeHtml(cleanFirstName)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="
                                        font-weight:bold;
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        Last Name
                                    </td>

                                    <td style="
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        ${escapeHtml(cleanLastName)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="
                                        font-weight:bold;
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        Work Email
                                    </td>

                                    <td style="
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        ${escapeHtml(cleanEmail)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="
                                        font-weight:bold;
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        Phone
                                    </td>

                                    <td style="
                                        border-bottom:1px solid #eeeeee;
                                    ">
                                        ${escapeHtml(cleanPhone)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="font-weight:bold;">
                                        Company Size
                                    </td>

                                    <td>
                                        ${escapeHtml(cleanCompanySize)}
                                    </td>
                                </tr>

                            </table>

                            <div style="
                                margin-top:25px;
                                padding:15px;
                                background:#f7f7f7;
                                border-radius:6px;
                            ">
                                <p style="
                                    margin:0;
                                    font-size:14px;
                                    color:#555555;
                                ">
                                    Click Reply to respond directly
                                    to ${escapeHtml(cleanFirstName)}.
                                </p>
                            </div>

                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        // -----------------------------
        // CONFIRMATION EMAIL
        // -----------------------------

        await transporter.sendMail({
            from: `"Drishtiqon" <${process.env.GMAIL_USER}>`,
            to: cleanEmail,
            replyTo: process.env.GMAIL_USER,

            subject: "We received your demo request",

            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Demo Request Received</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background:#f5f5f5;
                    font-family:Arial,Helvetica,sans-serif;
                ">

                    <div style="
                        max-width:600px;
                        margin:40px auto;
                        background:#ffffff;
                        border:1px solid #e5e5e5;
                        border-radius:10px;
                        overflow:hidden;
                    ">

                        <div style="
                            padding:28px;
                            background:#111111;
                            color:#ffffff;
                        ">

                            <h1 style="
                                margin:0;
                                font-size:24px;
                            ">
                                Thank You,
                                ${escapeHtml(cleanFirstName)}!
                            </h1>

                        </div>

                        <div style="padding:28px;">

                            <p style="
                                font-size:16px;
                                line-height:1.6;
                                color:#333333;
                            ">
                                Thank you for your interest in
                                <strong>Drishtiqon</strong>.
                            </p>

                            <p style="
                                font-size:16px;
                                line-height:1.6;
                                color:#333333;
                            ">
                                We've received your demo request.
                                Our team will review your details
                                and get back to you within 24 hours.
                            </p>

                            <div style="
                                margin:25px 0;
                                padding:18px;
                                background:#f7f7f7;
                                border-radius:6px;
                            ">

                                <p style="
                                    margin:0 0 8px;
                                    font-weight:bold;
                                ">
                                    Your submitted details:
                                </p>

                                <p>
                                    <strong>Name:</strong>
                                    ${escapeHtml(cleanFirstName)}
                                    ${escapeHtml(cleanLastName)}
                                </p>

                                <p>
                                    <strong>Email:</strong>
                                    ${escapeHtml(cleanEmail)}
                                </p>

                                <p>
                                    <strong>Phone:</strong>
                                    ${escapeHtml(cleanPhone)}
                                </p>

                                <p>
                                    <strong>Company Size:</strong>
                                    ${escapeHtml(cleanCompanySize)}
                                </p>

                            </div>

                            <p style="
                                font-size:16px;
                                line-height:1.6;
                                color:#333333;
                            ">
                                We look forward to speaking with you.
                            </p>

                            <p style="
                                margin-top:30px;
                                color:#555555;
                            ">
                                Regards,<br>
                                <strong>Drishtiqon Team</strong>
                            </p>

                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        // -----------------------------
        // SUCCESS
        // -----------------------------

        return res.status(200).json({
            success: true,
            message:
                "Demo request submitted successfully.",
        });

    } catch (error) {
        console.error(
            "Book A Demo email error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "We couldn't send your request right now. Please try again later.",
        });
    }
}