var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: creds.USER, // generated ethereal user
    pass: creds.PASS // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function sendMail(from, to, subject, text, html) {
  try {
    let mailsent = await transporter.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      text,
      html
    });
    return mailsent;
  }catch(error) {
    console.log('mail error: ', error);
  }
}


router.post('/send', async (req, res, next) => {
  var name = req.body.name
  var cname = req.body.cname
  var telephone = req.body.telephone
  var email = req.body.email
  var material = req.body.material
  var quantity = req.body.quantity
  var ddate = req.body.ddate
  var description = req.body.description
  var content = ` Name: ${name} \nCompany Name: ${cname} \nTelephone: ${telephone} \nEmail: ${email} \nMaterial: ${material} \nQuantity: ${quantity} \nDelivery Date: ${ddate}  \nDescription: ${description} `

  var mail = {
    from: name,
    to: 'k.tsai92@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  try {
    await sendMail(name, 'k.tsai92@gmail.com', 'New Message from Contact Form', content, '');
  }catch(error) {
    console.log('mail error: ', error);
  }

  // transporter.sendMail(mail, (err, data) => {
  //   if (err) {
  //     res.json({
  //       status: 'fail'
  //     })
  //   } else {
  //     res.json({
  //       status: 'success'
  //     })
  //   }
  // })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)