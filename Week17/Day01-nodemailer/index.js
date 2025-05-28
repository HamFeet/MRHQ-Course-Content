// Import package
const nodemailer = require("nodemailer")
require("dotenv").config();

console.log(process.env.EMAIL)

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
});
// ewan@missionreadyhq.com
const mailOptions = {
    from: "joshuafe@missionreadyhq.com",
    to: "j.a.feetham@gmail.com",
    subject: "Test email from Joshua Feetham using env",
    text: "This is a test of nodemailer to send emails",
    html: "<h1>This is a Big email sent from England</h1>"
};


transporter.sendMail(mailOptions);