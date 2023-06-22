import React,{useState} from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionRegister } from '../register/topregister';
// import { LoginFormReg } from './login_form';
import { Card } from '../service/card';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
   
    let [formData, setFromData]=useState({
        email: "",
        password: "",
    });
    const navigate=useNavigate();

    const onChangeFunc=(e)=>{
        setFromData({...formData,[e.target.name]: e.target.value});     
    };
    let onSubmitFunc=(e)=>{
       e.preventDefault();
       axios
       .post("http://localhost:5001/login", formData)
       .then((resp) => {
         console.log(resp);
         if (resp.data.status_code == 200) {
           toast.success("Login Successfully");
           setTimeout(() => {
             navigate('/');
           }, 3000);
         } else {
           toast.error("Email or Password incorrect");
         }
       })
       .catch((err) => {
         toast.error("Email or Password incorrect");
         console.log(err);
       });
    }

  return (
    <>
    <div className={`${style.login_section}`}>
         <Header />
      <SecondHeader />
      <div className={`${style.nested_login_section}`}>
      <TopSectionRegister/>
      </div>
    </div>
     <div>
     <div className={style.nested_form_login}>
          <h1>LOGIN NOW</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form onSubmit={onSubmitFunc}>
            <div>
              <input type="email" placeholder="Your Email" name='email' required onChange={onChangeFunc} />
            </div>
            <div>
              <input type="password" placeholder="Your Password" name='password' required onChange={onChangeFunc} />
            </div>
            <div className={`${style.btn_section}`}>
              <button>Submit</button>
              {/* <button>Register Now</button> */}
            </div>
          </form>
        </div>
        <ToastContainer/>
     </div>
    <Card/>   
    <Footer/>
    </>
  )
}
