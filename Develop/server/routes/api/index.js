const router = require('express').Router();
const nodemailer = require("nodemailer");


router.post('/email', (req, res) => {
    try {

        "use strict";

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({

    service: 'hotmail',
    auth: {
        user: 'huntermccarthy56@hotmail.com',
        pass: 
    }

});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'huntermccarthy56@hotmail.com', // sender address
    to: "huntermccarthy56@hotmail.com", // list of receivers
    subject: "New contact request", // Subject line
    text: req.body.message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

        console.log(req.body);
        res.status(200).send({message: "successful"})
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;
