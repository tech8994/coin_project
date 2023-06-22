import React, { useState } from "react";
import style from "./index.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginFormReg = () => {
  let [data, formData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    message: "",
  });
   
  const navigate=useNavigate();

  let onChangeData = (e) => {
    formData({ ...data, [e.target.name]: e.target.value });
  };
  let onSubmutFUnc = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/register", data)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status_code == 200) {
          toast.success("Account has created successfully");
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          toast.error("Account is created Already");
        }
      })
      .catch((err) => {
        toast.error("Account is created Already");
        console.log(err);
      });

    // console.log(data);
  };

  return (
    <div className={style.login_section}>
      <div className={style.nested_form}>
        {/* <div className={style.nested_form_login}>
          <h1>LOGIN NOW</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form>
            <div>
              <input type="email" placeholder="Your Email" />
            </div>
            <div>
              <input type="password" placeholder="Your Password" />
            </div>
            <div className={`${style.btn_section}`}>
              <button>Submit</button>
              <button>Register Now</button>
            </div>
          </form>
        </div> */}
        {/* Signup */}
        <div className={`${style.signUp}`}>
          <div className={`${style.nested_signup}`}>
            <h1>SIGNUP</h1>
            <p>Register Now</p>

            <form className={`${style.formSignup}`} onSubmit={onSubmutFUnc}>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={onChangeData}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChangeData}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeData}
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={onChangeData}
                required
              />
              <textarea
                cols="30"
                rows="4"
                placeholder="Enter Your Message"
                name="message"
                onChange={onChangeData}
                required
              ></textarea>
              <button className={`${style.btn_signup}`}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
