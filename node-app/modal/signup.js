const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
      process.env.ACCESS_SECRET_KEY
    //   { expiresIn: "3d" }
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
