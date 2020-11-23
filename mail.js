var nodemailer = require('nodemailer');

module.exports.log =  async function (user, callback) {
    console.log(user)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'rkbk1997@gmail.com',
        pass: 'shyamsundarlal'
      }
    });
  
    let mailOptions = {
      from: `${user.name}` ,// sender address
      to: user.email, // list of receivers
      subject: `${ user.subject } ` , // Subject line
      html: `<p>
            Name :)-  ${ user.name } <br>
            Email :)- ${ user.email } <br>
            Subject :)- ${ user.subject } <br>
            Message :)- ${ user.message }
            </p>
            `
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }
  