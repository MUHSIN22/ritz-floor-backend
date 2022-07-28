const nodemailer = require('nodemailer');
const { discountTemplate } = require('../mailTemplates/discountTemplate');

const sendEmail = async (email, subject, text,html,attachments) => {
  console.log(process.env.SMTP_HOST,'username:',process.env.SMTP_USERNAME, '  pass: ',process.env.SMTP_PASSWORD);
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });
        let info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME,
            to: email,
            subject: subject,
            text: text,
            html: html,
            attachments
        })
        return {status: 1, message: "Email sent successfully!"}

    } catch (err) {
        console.log(err);
        return {status: 0, message: "Email won't send!"}
    }
}

module.exports = sendEmail;