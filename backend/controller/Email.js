const nodemailer = require('nodemailer');

const sendEmail = async options =>{
    // create transport 
    const transport = nodemailer.createTransport({
       host:process.env.EMAIL_HOST,
       port:process.env.EMAIL_PORT,
       auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
       }
    });
    //DEFINE THE SNEDING EMAIL
    const mailOption ={
        from:"ram k <hello@ram.io>",
        to:options.email,
        subject:options.subject,
        text:options.message
    };

   
    // sending the email
    await transport.sendMail(mailOption);
}

module.exports=sendEmail;