const {Customer,ValidateData} = require("./../modules/customer.js");

//create a new customer
exports.createNewCustomer = async (req,res)=>{
  //validate customer with database
  const {error} = ValidateData(req.body)
  if(error){
   return res.status(400).send(error.details[0].message);
  }

  //create a new customer if validate passed succsesfully
  try{
  const addCustomer = await new Customer(req.body).save();
  res.send(req.body)
  } catch(err){
    console.log(err + " " + "cannt work")
  }
};


//get all customers in order to put it on a table on angular 
exports.showCustomers = (req,res)=>{

  const customers = Customer.find(req.body)

  res.send(customers);
}



























//delete a customer
exports.deleteCustomer = ((req,res)=>{
  res.status(200).json({
    status: 'succsess',
    data:{
      'user': 'user deleted'
    }
    
  })
});

//update user details
exports.updateCustomerDetails = ((req,res)=>{
  res.send("customer updated");
});