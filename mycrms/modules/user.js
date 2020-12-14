const mongoose = require('mongoose');
const Joi = require("@hapi/joi");
const { string, boolean } = require('@hapi/joi');

const userSchema = new mongoose.Schema({
 firstName:{
    type: String,
    required: true,
    minlength: 2,
    maxlength:255,
    
  },

  lastName:{
    type: String,
    required: true,
    minlength: 2,
    maxlength:255,
  },


  email: {
    type: String,
    required: true, 
    minlength: 6,
    maxlength: 255,
  },

  password: {
    type:String,
    minlength:7,
    required:true,
  },
  companyName: {
    type:String,
    minlength:2,
    maxlength:100,
  },
  checkbox: {
    type: Boolean,
    required:true,
  },
  createdAt:{
    type: Date,
    default:Date.now
  }
});

const User = mongoose.model('User', userSchema);

function validateUser(user){
  const Schema = Joi.object({
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().regex(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/),
    password: Joi.string().min(7).required(),
    companyName: Joi.string().min(2).max(100),
    checkbox: Joi.boolean().required(),
  });

  return Schema.validate(user)
}

module.exports = {User, validateUser};