const mailer = require('nodemailer')
const secrets = require('../secrets/secrets')

module.exports = mailer.createTransport({
    host: secrets.mail_host,
    port: secrets.mail_port, // Protocol port 
    secure: secrets.mail_secure, // TLS
    auth: { 
        user: secrets.mail_user,
        pass: secrets.mail_pass
    }
})