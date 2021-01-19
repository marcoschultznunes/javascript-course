const secrets = require('./secrets')

module.exports = (userEmail, verificationToken) => {
    return {
        from: secrets.user,
        to: userEmail,
        subject: 'The Choppa account verification',
        html: `<h1>Click here to verify your email! Verification token: ${verificationToken}</h1>`
    }
}
