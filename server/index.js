const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors({
  origin: '*'
}));
const { sendEmail } = require('./mail');
app.post("/api/sendMail", (req, res) => {
    console.log(req.body)      
    sendEmail(req.body.data.email, req.body.data.name, req.body.data.phone,req.body.data.website,req.body.data.message)
})
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});