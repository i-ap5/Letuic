import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.zoho.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_PORT == '465' || process.env.SMTP_SECURE == 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function main() {
    try {
        console.log("Config:", {
            host: process.env.SMTP_HOST || 'smtp.zoho.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_PORT == '465' || process.env.SMTP_SECURE == 'true',
            user: process.env.SMTP_USER,
            passLength: process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0
        });
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: "Test email",
            text: "This is a test email"
        });
        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.error("Error from nodemailer:", err.message);
    }
}
main();
