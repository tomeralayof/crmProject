const {User,validateUser} = require("./../modules/user.js");
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { json } = require("body-parser");


//validate email existance at create user
exports.checkEmail = async (req,res) =>{
  try{
  const validateEmailExistance = await User.findOne({email: req.body.email});
  let exist;
  if(validateEmailExistance){
    return res.status(200).json({exist: true})
  }
  if(!validateEmailExistance){
    return res.status(200).json({exist: false})
  }
} catch(err){
  console.log(err + "couldnt work")
}
};





// exports.checkEmail = async (req, res) => {
//   const validateEmailExistance = await User.findOne({email: req.body.email});
//   let exist = false;
//   if( validateEmailExistance ) exist = true; 
//   return res.json({ exist });
// };



// post a new user
exports.createUser = async (req,res) => {
  //validate data and send an error massage
  const {error} = validateUser(req.body)
  if(error){
    return res.status(400).send(error.details[0].message)
  }
  //validate email existance
  const validateEmailExistance = await User.findOne({email: req.body.email})
  if(validateEmailExistance){
    return res.status(400).send("User is already exists")
  }
  //send user data to the data base
  const newUser = await new User(req.body).save();

  //bycrpt the password using hash
  try{
  const salt = await bcrypt.genSalt(12)
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();
  } catch(err){
    console.log(err + " " + "fuck man it doesnt work")
  };
  
  


  // send email
  const output = `
  <p>You have succsesffuly registered royal system crm</p>
  <ul>
  <li>Your Email: ${req.body.email}</li>
  </ul>
  <p>Our staff wish you a good experience</p>
  `;


  try{
  let transporter = await nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'apikey', // generated ethereal user
      pass: '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',          
      // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Royal System" tomeralayof95959@gmail.com', // sender address
    to: `${req.body.email}`, // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}
catch(err) {
  console.log(err + " " + 'so bad bro')
  
}

res.send(req.body)

}
// in order to succsess writing mails with node js i need to do some things:
// 1. install node mailer on npm terminal.
//2. copy the mail format from internet which nodemailer use.
//3. in the host i have to write the send mailer server domain
//use ssl cartificate for using the port(link crypt on internet)
//port will be 465 
//use user and password from email server domain
// upload my server into production