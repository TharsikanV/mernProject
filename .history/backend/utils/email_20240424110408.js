const nodemailer=require('nodemailer');
const sendEmail=async options=>{
    // const transport={
    //     host:process.env.SMTP_HOST,
    //     port:process.env.SMTP_PORT,
    //     auth:{
    //         user:process.env.SMTP_USER,
    //         pass:process.env.SMTP_PASS
    //     }
    // };
    var transport = nodemailer.createTransport({
        host: "tharsikan650@",
        port: 2525,
        auth: {
          user: "ef95892a883351",
          pass: "f314c072d782cf"
        }
      });

    const transporter=nodemailer.createTransport(transport);

    const message={
        from:`${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await transporter.sendMail(message)
}

module.exports=sendEmail;