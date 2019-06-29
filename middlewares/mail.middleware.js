/**
 * @author mutwol
 */

const mailer = require('nodemailer');

async function mail() {
    const {MAIL_SERVICE_NAME, MAIL_USER_NAME, MAIL_USER_PASSWORD} = process.env;

    const transporter = mailer.createTransport ({
        service: MAIL_SERVICE_NAME,
        auth: {
            user: MAIL_USER_NAME,
            pass: MAIL_USER_PASSWORD
        }
    });

    const options =  {
        from: MAIL_USER_NAME,
        to: 'cyrusmutwol@gmail.com',
        subject: 'Verify Your account ✔',
        html: 
        `
        <h1>You Node mailer is working</h1>
        <p>
            Your Name: {{name}}
            <br/>
            Your address: {{address}}
            <br/>
            Your Email: {{email}}
        </p>
        `
    };

    let info = await transporter.sendMail(options);

    console.log('mail send : ', info.messageId);
}

mail().catch(err => console.log('error', err));
