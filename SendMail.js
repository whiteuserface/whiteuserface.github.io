const nodemailer = require('nodemailer');

const email = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "022ae2e25e283e",
          pass: "c7f9aafdf8d561"
        }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let data = {
    from: 'white.user.face@gmail.com',
    to: 'avirtuouscircle@naver.com',
    subject: '테스트 메일 입니다.',
    text: 'nodejs practice'
}

send(data);