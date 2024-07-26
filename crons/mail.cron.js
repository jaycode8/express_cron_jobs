const cron = require("node-cron");
const transporter = require("./transporter");
const fs = require("fs");
const path = require("path");

const sendEmail = () => {
    const filePath = path.join(__dirname, "test.html");
    fs.readFile(filePath, { encoding: "utf-8" }, async (err, html) => {
        if (err) {
            return console.log(err);
        }

        const mailOptions = {
            from: process.env.sender,
            to: process.env.receipient,
            subject: "Scheduld Email",
            html: html,
            // text: "This is an automated email by node-cron",
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log(info.response);
        } catch (err) {
            console.log(err);
        }
    });
};

cron.schedule("* * * * *", async () => {
    sendEmail();
});
