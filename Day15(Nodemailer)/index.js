var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshdeepshingh001@gmail.com',
    pass: '@Saifali1234'
  }
});

var mailOptions = {
  from: 'akshdeepsingh001@gmail.com',
  to: 'tusharpachouri002@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});