const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const parser = require("body-parser");
const resolvePath = require('resolve-path');
const app = express();

/// dotenv.config({path:"/config.env"})
app.use(parser.urlencoded({ extended: false }));

app.use(express.json());

const DB = process.env.DATA_BASE

mongoose.connect( "mongodb+srv://tomer:LutOAnIM5XJxMKzq@tomerapp.rmn9r.mongodb.net/crm_api?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true
})
.then(()=>{
  console.log("connected to mongo")
})
.catch(()=>{
  console.log("couldnt connect to mongo")
});


const userRouter = require('./routers/userRour');
app.use("/api/user",userRouter);

const customerRouter = require('./routers/customerRout');
app.use("/api/customer", customerRouter);


const port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log(`click http://localhost:${port}`)
});










// app.use((req,res,next)=>{
//   res.sendFile(__dirname + "./../public/src/app/components/customers/customers.component.html")
//   next()
//  });

// console.log(__dirname + "this is from dirname")



// app.use((req,res,next)=>{
 

//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type , Accept");

//   if(req.method ==='OPTION'){
//       res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE,PATCH');
//       return res.status(200).json({});
//   }
//   next();
// });