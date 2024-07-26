const express = require("express");
require("dotenv").config()
require("./crons/mail.cron");
const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json())

app.listen(PORT, ()=> console.info(`app running at port ${PORT}`))