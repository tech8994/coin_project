const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already present"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  },
  province:{
    type:String,
    required: true,
  },
  city:{
    type: String,
    required:true,
  },
  zipCode:{
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
//   token: [
//     {
//       token: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Generating Tokens
signupSchema.methods.generateAuthToken = async function () {
  try {
    console.log(this._id);
    let jwtToken = jwt.sign(
      { _id: this._id.toString() },
      '3858a48fbe674c6cd09abafaf21b9859c2433af59a37fb3690e95c5ccf2b607ca46b4264330daa1c8dfbdb536f497e6be5c163c1088d1fc9b007e4c11f8485c3',
      { expiresIn: "3d" }
    );
    // this.token = this.token.concat({ token: jwtToken });
    // await this.save()
    return jwtToken;
  } catch (error) {
    console.log("This is json Toekn", error);
  }
};

// Password Encrypt
signupSchema.pre("save", async function (next) {
  this.password = await bycrypt.hash(this.password, 10);
  next();
});

const Register = new mongoose.model("Register", signupSchema);
module.exports = Register;
