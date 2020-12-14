const {User,validateUser} = require("./../modules/user.js");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');


exports.logInUser = async (req,res)=>{
  
  //validate user patern
    const {error} = validateLogInPattern(req.body);
    if(error){
     return res.status(400).send(error.details[0].message);
    }
  
  //validate email existance
    const email = await User.findOne({email: req.body.email});
    if(!email){
      return res.status(400).send("invalide email");
    }

    //validate password existance
    const isValide = await bcrypt.compare(req.body.password, email.password)
    if(!isValide){
      return res.status(400).send("invalide password");
    }
    res.send("good job the varification passed succsessfuly");
  }; 



  function validateLogInPattern(login){
    const schema = Joi.object({
      email: Joi.string().min(6).max(255).required().regex(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/),
      password: Joi.string().min(7).required(),
    });
    return schema.validate(login)
  }