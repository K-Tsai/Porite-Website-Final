var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
  host: 'Smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is read to take messages');
  }
});

router.post('/send', (req, res, next) => {
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

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)