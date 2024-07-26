const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.sender,
        pass: process.env.password
    },
});

module.exports = transporter;