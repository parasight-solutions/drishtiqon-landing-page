import nodemailer from "nodemailer";

const ALLOWED_COMPANY_SIZES = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+",
];

export default async function handler(req, res) {
    // ---------------------------------
    // ONLY ALLOW POST REQUESTS
    // ---------------------------------

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

        // ---------------------------------
        // CLEAN INPUT
        // ---------------------------------

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

        // ---------------------------------
        // REQUIRED FIELD VALIDATION
        // ---------------------------------

        if (
            !cleanFirstName ||
            !cleanLastName ||
            !cleanEmail ||
            !cleanPhone ||
            !cleanCompanySize
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields.",
            });
        }

        // ---------------------------------
        // FIRST NAME VALIDATION
        // ---------------------------------

        if (cleanFirstName.length < 2) {
            return res.status(400).json({
                success: false,
                message:
                    "First name must be at least 2 characters.",
            });
        }

        if (cleanFirstName.length > 50) {
            return res.status(400).json({
                success: false,
                message:
                    "First name must be less than 50 characters.",
            });
        }

        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(cleanFirstName)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid first name.",
            });
        }

        // ---------------------------------
        // LAST NAME VALIDATION
        // ---------------------------------

        if (cleanLastName.length < 2) {
            return res.status(400).json({
                success: false,
                message:
                    "Last name must be at least 2 characters.",
            });
        }

        if (cleanLastName.length > 50) {
            return res.status(400).json({
                success: false,
                message:
                    "Last name must be less than 50 characters.",
            });
        }

        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(cleanLastName)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid last name.",
            });
        }

        // ---------------------------------
        // EMAIL VALIDATION
        // ---------------------------------

        if (cleanEmail.length > 254) {
            return res.status(400).json({
                success: false,
                message:
                    "Email address is too long.",
            });
        }

        const emailRegex =
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(cleanEmail)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid email address.",
            });
        }

        // ---------------------------------
        // PHONE VALIDATION
        // ---------------------------------

        const normalizedPhone =
            cleanPhone.replace(/[\s()-]/g, "");

        if (!/^\+?[0-9]{7,15}$/.test(normalizedPhone)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid phone number.",
            });
        }

        // ---------------------------------
        // COMPANY SIZE VALIDATION
        // ---------------------------------

        if (
            !ALLOWED_COMPANY_SIZES.includes(
                cleanCompanySize
            )
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Please select a valid company size.",
            });
        }

        // ---------------------------------
        // CHECK GMAIL ENVIRONMENT VARIABLES
        // ---------------------------------

        if (
            !process.env.GMAIL_USER ||
            !process.env.GMAIL_APP_PASSWORD
        ) {
            console.error(
                "Missing Gmail environment variables."
            );

            return res.status(500).json({
                success: false,
                message:
                    "Email service is not configured correctly.",
            });
        }

        // ---------------------------------
        // CREATE GMAIL TRANSPORTER
        // ---------------------------------

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // ---------------------------------
        // VERIFY GMAIL CONNECTION
        // ---------------------------------

        await transporter.verify();

        // ---------------------------------
        // EMAIL TO SELLER
        // ---------------------------------

        await transporter.sendMail({
            from: `"Drishtiqon Website" <${process.env.GMAIL_USER}>`,

            to: process.env.GMAIL_USER,

            replyTo: cleanEmail,

            subject: `New Demo Request - ${cleanFirstName} ${cleanLastName}`,

            html: `
                <!DOCTYPE html>

                <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>New Demo Request</title>
                </head>

                <body
                    style="
                        margin: 0;
                        padding: 0;
                        background-color: #f5f5f5;
                        font-family: Arial, Helvetica, sans-serif;
                    "
                >

                    <div
                        style="
                            max-width: 600px;
                            margin: 40px auto;
                            background: #ffffff;
                            border-radius: 10px;
                            overflow: hidden;
                            border: 1px solid #e5e5e5;
                        "
                    >

                        <div
                            style="
                                padding: 24px;
                                background-color: #111111;
                                color: #ffffff;
                            "
                        >

                            <h1
                                style="
                                    margin: 0;
                                    font-size: 24px;
                                "
                            >
                                New Demo Request
                            </h1>

                            <p
                                style="
                                    margin: 8px 0 0;
                                    color: #cccccc;
                                "
                            >
                                Someone has requested a demo
                                through your website.
                            </p>

                        </div>

                        <div style="padding: 24px;">

                            <h2
                                style="
                                    margin-top: 0;
                                    font-size: 18px;
                                    color: #111111;
                                "
                            >
                                Contact Details
                            </h2>

                            <table
                                width="100%"
                                cellpadding="8"
                                cellspacing="0"
                                style="
                                    border-collapse: collapse;
                                    font-size: 15px;
                                "
                            >

                                <tr>
                                    <td
                                        style="
                                            font-weight: bold;
                                            width: 150px;
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        First Name
                                    </td>

                                    <td
                                        style="
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        ${escapeHtml(cleanFirstName)}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="
                                            font-weight: bold;
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        Last Name
                                    </td>

                                    <td
                                        style="
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        ${escapeHtml(cleanLastName)}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="
                                            font-weight: bold;
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        Work Email
                                    </td>

                                    <td
                                        style="
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        ${escapeHtml(cleanEmail)}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="
                                            font-weight: bold;
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        Phone Number
                                    </td>

                                    <td
                                        style="
                                            border-bottom: 1px solid #eeeeee;
                                        "
                                    >
                                        ${escapeHtml(cleanPhone)}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="
                                            font-weight: bold;
                                        "
                                    >
                                        Company Size
                                    </td>

                                    <td>
                                        ${escapeHtml(cleanCompanySize)}
                                    </td>
                                </tr>

                            </table>

                            <div
                                style="
                                    margin-top: 25px;
                                    padding: 15px;
                                    background: #f7f7f7;
                                    border-radius: 6px;
                                "
                            >

                                <p
                                    style="
                                        margin: 0;
                                        font-size: 14px;
                                        color: #555555;
                                    "
                                >
                                    Click "Reply" to respond
                                    directly to
                                    ${escapeHtml(cleanFirstName)}.
                                </p>

                            </div>

                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        // ---------------------------------
        // CONFIRMATION EMAIL TO CUSTOMER
        // ---------------------------------

        await transporter.sendMail({
            from: `"Drishtiqon" <${process.env.GMAIL_USER}>`,

            to: cleanEmail,

            replyTo: process.env.GMAIL_USER,

            subject:
                "We received your demo request",

            html: `
                <!DOCTYPE html>

                <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>Demo Request Received</title>
                </head>

                <body
                    style="
                        margin: 0;
                        padding: 0;
                        background-color: #f5f5f5;
                        font-family: Arial, Helvetica, sans-serif;
                    "
                >

                    <div
                        style="
                            max-width: 600px;
                            margin: 40px auto;
                            background: #ffffff;
                            border-radius: 10px;
                            overflow: hidden;
                            border: 1px solid #e5e5e5;
                        "
                    >

                        <div
                            style="
                                padding: 28px;
                                background-color: #111111;
                                color: #ffffff;
                            "
                        >

                            <h1
                                style="
                                    margin: 0;
                                    font-size: 24px;
                                "
                            >
                                Thank You,
                                ${escapeHtml(cleanFirstName)}!
                            </h1>

                        </div>

                        <div style="padding: 28px;">

                            <p
                                style="
                                    font-size: 16px;
                                    line-height: 1.6;
                                    color: #333333;
                                "
                            >
                                Thank you for your interest in
                                <strong>Drishtiqon</strong>.
                            </p>

                            <p
                                style="
                                    font-size: 16px;
                                    line-height: 1.6;
                                    color: #333333;
                                "
                            >
                                We've received your demo request.
                                Our team will review your details and
                                get back to you within 24 hours.
                            </p>

                            <div
                                style="
                                    margin: 25px 0;
                                    padding: 18px;
                                    background: #f7f7f7;
                                    border-radius: 6px;
                                "
                            >

                                <p
                                    style="
                                        margin: 0 0 8px;
                                        font-weight: bold;
                                        color: #111111;
                                    "
                                >
                                    Your submitted details:
                                </p>

                                <p
                                    style="
                                        margin: 5px 0;
                                        color: #555555;
                                    "
                                >
                                    <strong>Name:</strong>
                                    ${escapeHtml(cleanFirstName)}
                                    ${escapeHtml(cleanLastName)}
                                </p>

                                <p
                                    style="
                                        margin: 5px 0;
                                        color: #555555;
                                    "
                                >
                                    <strong>Email:</strong>
                                    ${escapeHtml(cleanEmail)}
                                </p>

                                <p
                                    style="
                                        margin: 5px 0;
                                        color: #555555;
                                    "
                                >
                                    <strong>Phone:</strong>
                                    ${escapeHtml(cleanPhone)}
                                </p>

                                <p
                                    style="
                                        margin: 5px 0;
                                        color: #555555;
                                    "
                                >
                                    <strong>Company Size:</strong>
                                    ${escapeHtml(cleanCompanySize)}
                                </p>

                            </div>

                            <p
                                style="
                                    font-size: 16px;
                                    line-height: 1.6;
                                    color: #333333;
                                "
                            >
                                We look forward to speaking with you.
                            </p>

                            <p
                                style="
                                    margin-top: 30px;
                                    color: #555555;
                                "
                            >
                                Regards,<br />
                                <strong>Drishtiqon Team</strong>
                            </p>

                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        // ---------------------------------
        // SUCCESS RESPONSE
        // ---------------------------------

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


// ---------------------------------
// HTML ESCAPE FUNCTION
// ---------------------------------

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

