import React,{useState, useEffect} from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionRegister } from '../register/topregister';
// import { LoginFormReg } from './login_form';
import { Card } from '../service/card';
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
   let data="Login"
    let [formData, setFromData]=useState({
        email: "",
        password: "",
    });
    const navigate=useNavigate();

    const onChangeFunc=(e)=>{
        setFromData({...formData,[e.target.name]: e.target.value});     
    };

    // let FuncData= async()=>{
    //   // let RealData=JSON.stringify(formData);
    //   // console.log(RealData);

    //   try{
    //     let res= await axios.post("https://coin-app-a1a16cdf50c4.herokuapp.com/login",formData);
    //     console.log(res);
    //   }catch(err){
    //     console.log(err);
    //   }

    // }

    let onSubmitFunc=(e)=>{
       e.preventDefault();
       axios
      .post("https://coin-apps-dad75aa17cff.herokuapp.com/login", formData)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status_code == 200) {
          toast.success("Login Successfully");
          localStorage.setItem("token",resp.data.token);
          localStorage.setItem("email",resp.data.userinfo.email);
          localStorage.setItem("userid",resp.data.id);
          localStorage.setItem("fullname",resp.data.userinfo.fullName);
          localStorage.setItem("number",resp.data.userinfo.phoneNumber);
          localStorage.setItem("address",resp.data.userinfo.address);
          localStorage.setItem("country",resp.data.userinfo.country);
          localStorage.setItem("city",resp.data.userinfo.city);
          localStorage.setItem("province",resp.data.userinfo.province);
          localStorage.setItem("zipCode",resp.data.userinfo.zipCode);

          console.log(localStorage.getItem("email"));
          setTimeout(() => {
            navigate('/user-profile');
          }, 3000);
        } else {
          toast.error("Email or Password incorrect");
        }
      })
      .catch((err) => {
        toast.error("Email or Password Incorrect");
        console.log(err);
      });
    };




  return (
    <>
    <div className={`${style.login_section}`}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_login_section}`}>
      <TopSectionRegister data={data}/>
      </div>
    </div>
     <div>
     <div className={style.nested_form_login}>
          <h1>LOGIN NOW</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form onSubmit={onSubmitFunc} >
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
          <div className={`${style.signup_section} py-9 text-center`}>
            <p>If you are not login then you need to do <NavLink to="/register">Signup</NavLink> </p>
          </div>
        </div>
        <ToastContainer/>
     </div>
    <Card/>   
    <Footer/>
    </>
  )
}
