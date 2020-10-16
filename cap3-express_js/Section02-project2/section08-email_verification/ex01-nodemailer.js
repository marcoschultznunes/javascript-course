/*
    To send emails i will add the nodemailer package to the project
        npm install nodemailer

    Then create a email configuration file
*/
const mailer = require('nodemailer')
const secrets = require('../secrets/secrets')

module.exports = mailer.createTransport({
    // I'll simulate env variables with my secrets.js file
    host: secrets.mail_host,
    port: secrets.mail_port, // Protocol port. The TLS port is 465 
    secure: secrets.mail_secure, // Boolean that determines if TLS will be used
    auth: { 
        user: secrets.mail_user,
        pass: secrets.mail_pass
    }
})

// We'll use this to send a test email on a route in the user model
router.post('/testemail', (req, res, next) => {
    mail.sendMail({
        from: 'Project 02 <' + secrets.mail_user + '>',
        to: 'oantedeguemon@gmail.com',
        subject: 'Testing Node Email',
        html: "<h1>Hello There</h1>"
    }).then(success => {
        if(success){
            res.status(200).send('Email sent')
        } else{
            res.status(500).send({error: {message: 'Could not send the email'}})
        }
    }).catch(error => {
        res.status(500).send({error: {message: error.message}})
    })
})