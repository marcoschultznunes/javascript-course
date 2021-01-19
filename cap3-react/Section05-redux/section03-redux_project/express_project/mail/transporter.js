const nodemailer = require('nodemailer')
const secrets = require('./secrets')

module.exports = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: secrets.user, 
      pass: secrets.pass 
    }
})
