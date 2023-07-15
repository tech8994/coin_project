const express = require("express");
var cors = require("cors");
const Register = require("./modal/signup");
const bycrypt = require("bcryptjs");
const PhyscialCoin = require("./modal/phsicalcoinorder");
const testimonalSchemaVar = require("./modal/testimonal");
const app = express();
require("./db/index");
let PORT = process.env.PORT || 5001;
// cors define
app.use(cors({"origin": "*",credentials:true}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// making an apis
app.get("/", (req, res) => {
  console.log("hello World App");
  res.send("I am live");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  try{
    let register = new Register(req.body);

    const token = await register.generateAuthToken();
    console.log(token);
  
    register
      .save()
      .then(() => {
        res
          .status(200)
          .send({
            register: register,
            status_code: 200,
            message: "User Created Successfully",
          });
      })
      .catch((err) => {
        console.log(err)
        res.status(400).send({message: "User Already Created"});
      });
  }catch(error){
    console.log(error);
    res.status(400).send(res);
  }
  

});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    let email = req.body.email;
    let password = req.body.password;
    let useremail = await Register.findOne({ email: email });
    const isMatch = await bycrypt.compare(password, useremail.password);
    const token = await useremail.generateAuthToken();
    console.log(useremail);

    if (isMatch) {
      res
        .status(200)
        .send({
          message: "Successfully Login",
          userinfo:useremail, 
          // useremail: useremail.email,
          // number: useremail.phoneNumber,
          // name: useremail.fullName,
          id: useremail._id.toString(),
          token: token,
          status_code: 200,
        });
    } else {
      res.status(400).send("Invalid Password");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid Email or Password");
  }
});


app.post('/physcialcoin', async(req, res) =>{
  // console.log(req.body);
  try{
    let email = req.body.email;
    let userAuthemail = await Register.findOne({ email: email });
    // console.log(userAuthemail);
    let phsicalCoinOrder = new PhyscialCoin(req.body);
    if(userAuthemail){
      // let id=userAuthemail._id;
      // let finalData={
      //   phsicalCoinOrder,
      //   id: id.toString()
      // };
      // console.log("Final Data", finalData);
      phsicalCoinOrder
      .save()
      .then(() => {
        res
          .status(200)
          .send({
            phsicalCoinOrder: phsicalCoinOrder,
            status_code: 200,
            message: "Your Application has been Submitted Successfully",
          });
      })
      .catch((err) => {
        console.log(err)
        res.status(400).send({message: "Please Fill the Form Correctly"});
      });

    }else{
      console.log("User Not Found Plz create your account");
      res.status(404).send({message: "User Not Found Plz create your account",status_code: 404});
    }

  }catch(err){
   console.log(err);
   res.status(404).send("user not found");
   
  }


});

// get api fo fethc user
app.post("/order",(req, res) =>{
  console.log(req.body);
   try{
    let userID = req.body.userID;
       PhyscialCoin.find({userId: userID}).then((result) =>{
        console.log(result);
        if(!result.length){
          res.status(404).send({msg: "No Order Found", status_code:404});
        }else{
          res.status(200).send({result:result, status_code: 200});
        }

       }).catch(err =>{
            res.status(404).send({msg: "Please Login"});
           console.log(err);
       })

   }catch(err){
    console.log(err);
    res.status(404).send("No Data Found")
   }
})


// add the slides data
app.post("/add-slides",(req, res) =>{
    try{
     console.log(req.body);
      let data = new testimonalSchemaVar(req.body);
      data
      .save()
      .then(() => {
        res
          .status(200)
          .send({
            message: "Successfully Added",
          });
      })
      .catch((err) => {
        console.log(err)
        res.status(400).send({message: "Not Added Data"});
      });
    }catch(err){
      console.error(err.message);
    }
});
// get all testimonals

app.get("/all-slides",(req, res) =>{

  try{
    testimonalSchemaVar.find({}).then((result) =>{
      console.log(result);
      res.status(200).send({result:result, status_code: 200});
    }).catch((err) =>{
      console.log(err);
    })
  }catch(err){
    console.log(err);
    res.status(400).send({message: "Not Data Found"});
  }
})


app.listen(PORT, () => {
  console.log(`The Application is Runing ${PORT}`);
});
