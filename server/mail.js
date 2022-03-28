const mailer = require("nodemailer");
const getEmailData = (to, name, phone,website,message) => {
    let data = null;
            data = {
                from: "IDesk <IDesk-Help@gmail.com>",
                to,
                subject: `IDesk ${name} , Help Request `,
                html:`<div style="margin-left:1em ; background-color: #21292f; padding: 1em; color: rgb(253, 247, 247); font: 1em sans-serif; ">
                <h3>InterviewDesk Help New Request Details</h1>
                <hr>
                <h4>Name : ${name}</h4>
                <h4>Email : ${to}</h4>
                <h4>Contect Number : ${phone}</h4>
                <h4>Website : ${website}</h4>
                <h4>Message : ${message}</h4>
              </div>
             `
            }
    return data;
}
const sendEmail = (to, name, phone,website,message) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "live20.appricots@gmail.com",
            pass: "Admin@123"
        }
    })
    const mail = getEmailData(to, name, phone,website,message)
    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })
}
module.exports = { sendEmail }