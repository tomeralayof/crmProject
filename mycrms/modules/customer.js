const mongoose = require('mongoose');
const Joi = require("@hapi/joi");
const { string, boolean, number } = require('@hapi/joi');

const customerSchema = new mongoose.Schema({
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

  address:{
    type: String,
    required:true,
    minlength:3,
    maxlength:255,
  },

  city:{
    type: String,
    required:true,
    minlength:3,
    maxlength:255,
  
  },

  product:{
    type: String,
    required:true,
  },

  numberOfProduct:{
    type:Number
  },

  amount:{
    type:Number,
  },

  total: {
    type:Number,
  } 
});

const Customer = mongoose.model('Customer', customerSchema, 'customers');



function ValidateData(customer){
const schema = Joi.object({
  firstName: Joi.string().min(2).max(255).required(),
  lastName: Joi.string().min(2).max(255).required(),
  address: Joi.string().min(3).max(255).required(),
  city: Joi.string().min(3).max(255).required(),
  product: Joi.string().required(),
  numberOfProduct: Joi.number(),
  amount: Joi.number(),
  total: Joi.number(),

});
  return schema.validate(customer);  
}


module.exports = {Customer , ValidateData};
