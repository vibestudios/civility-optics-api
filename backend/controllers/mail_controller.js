import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "6cf5ab89130dcd",
        pass: "a555fd05c535db"
    }
});

const sendMail = (subject, plaintext, html, recipient) => {
    return;
        
    var message = {
        from: '"Civility Optics" <no-reply@civilityoptics.com>',
        to: recipient,
        subject: subject,
        text: plaintext,
        html: html
    };

    transport.sendMail(message, (error, info) => {
        if (error) {
        return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    })
}

export default sendMail