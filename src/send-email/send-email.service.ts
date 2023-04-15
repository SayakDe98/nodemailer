import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class SendEmailService {
    async sendEmail () {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
            //   user: process.env.MAIL_USERNAME,
              user: "sayakde22@gmail.com",
            //   pass: process.env.MAIL_PASSWORD,
              pass: "i am sayak",
            //   clientId: process.env.OAUTH_CLIENTID,
              clientId: "368132545851-353kuqomirddei7umm5rqkcgo8oplg33.apps.googleusercontent.com",
            //   clientSecret: process.env.OAUTH_CLIENT_SECRET,
              clientSecret: "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",
            //   refreshToken: process.env.OAUTH_REFRESH_TOKEN
              refreshToken: "1//04U4ITeb1YRalCgYIARAAGAQSNwF-L9IrYSZ-qJTQMt4AWtUnbJlB2dV0jTot40jEHgsroa9uIFa87EqEc3lkXPj_xxGNWPu08_4",
              accessToken: "ya29.a0AVvZVsrmTOm64x0m_B4NNnlDPMJ2Nd2FMHrNrJBHgMIIe2ofeI3c6Xjyl0Ix7ocM1l9JkR_VeA7BM-77yh6AFysZLQ7xJ-QDQDtXA8mYZkxyTR0SzJsXhNFVt7cjUnvI5nS33RMT3kZxGbSg-ijIHB6zhlmQaCgYKASMSARMSFQGbdwaIsfJFA2xugHP-JG-rZqLgEw0163",

            }
          });
          let mailOptions = {
            from: "sayakde22@gmail.com",
            to: "sayakde777@gmail.com",
            subject: 'Nodemailer Project',
            text: 'Hi from your nodemailer project'
          };
          transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
              console.log("Error " + err);
              return {data: err, message: err.message };
            } else {
              console.log("Email sent successfully");
              return { message: "Email sent successfully!" }
            }
          });
          // console.log(result)
          // return result;
      
    }
}
