const express = require("express");
var cors = require("cors");
const Register = require("./modal/signup");
const bycrypt = require("bcryptjs");
const app = express();
require("./db/index");
let PORT = process.env.PORT || 5001;
// cors define
app.use(cors());
app.use(express.json());
// making an apis
app.get("/", (req, res) => {
  res.send("I am live");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
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
      res.status(400).send(err);
    });
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
          useremail: useremail.email,
          number: useremail.number,
          token: token,
          status_code: 200,
        });
    } else {
      res.status(400).send("Invalid Password");
    }
  } catch (err) {
    // console.log(err);
    res.status(400).send("Invalid Email or Password");
  }
});

app.listen(PORT, () => {
  console.log(`The Application is Runing ${PORT}`);
});
