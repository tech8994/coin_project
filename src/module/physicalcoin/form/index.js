import React, { useState } from "react";
import style from "./index.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const FormPhsicalCoin = () => {
  const [selectValue, setSelectValue] = useState({
    diameter: "",
    thickness: "",
    weight: "",
    composition: "",
    email: "",
    userId: "",
  });
  const navigate=useNavigate();

  const onChangeFunc = (e) => {
    setSelectValue({
      ...selectValue,
      [e.target.name]: e.target.value,
      email: localStorage.getItem("email"),
      userId: localStorage.getItem("userid"),
    });
  };
  const onSubmitFunc = (e) => {
    e.preventDefault();
    console.log(selectValue);
    // let finalData = {
    //   selectValue,
    //   email: localStorage.getItem("email"),
    //   userId: localStorage.getItem("userid"),
    // };
    // console.log(finalData);
    axios
      .post(
        "https://coin-apps-dad75aa17cff.herokuapp.com/physcialcoin",
        selectValue
      )
      .then((resp) => {
        console.log(resp);
        if (resp.data.status_code == 200) {
          toast.success(resp.data.message);
          setTimeout(() => {
            navigate('/phsical-status');
          }, 5000);
        } else {
          // console.log();
          toast.error("Email or Password incorrect");
        }
      })
      .catch((err) => {
        toast.error(err.data.message);
        // console.log(err);
      });
  };
  
  return (
    <div className={style.form_section}>
      <div className={`${style.nested_form_Section}`}>
        <h1>Specs On Our Physical Coins</h1>
        <div className={`${style.selectBox_section}`}>
          <form onSubmit={onSubmitFunc}>
            <div className={`${style.nested_section_selectbox}`}>
              <div className={`flex flex-col ${style.selectbox}`}>
                <label>Diameter 1.3/4 iches</label>
                <select onChange={onChangeFunc} name="diameter">
                  <option value=""></option>
                  <option value="1inch">1 Inch</option>
                  <option value="2inch">2 Inch</option>
                  <option value="3inch">3 Inch</option>
                  <option value="4inch">4 Inch</option>
                </select>
              </div>

              <div className={`flex flex-col ${style.selectbox}`}>
                <label>Thickness: 1/8 inch</label>
                <select onChange={onChangeFunc} name="thickness">
                  <option value=""></option>
                  <option value="1inch">1 Inch</option>
                  <option value="2inch">2 Inch</option>
                  <option value="3inch">3 Inch</option>
                  <option value="4inch">4 Inch</option>
                  <option value="5inch">5 Inch</option>
                  <option value="6inch">6 Inch</option>
                  <option value="7inch">7 Inch</option>
                  <option value="8inch">8 Inch</option>
                </select>
              </div>

              <div className={`flex flex-col ${style.selectbox}`}>
                <label>Weight: 1.3 oz</label>
                <select onChange={onChangeFunc} name="weight">
                  <option value=""></option>
                  <option value="0.1oz">0.1 oz</option>
                  <option value="0.2oz">0.2 oz</option>
                  <option value="0.3oz">0.3 oz</option>
                  <option value="0.4oz">0.4 oz</option>
                  <option value="0.5oz">0.5 oz</option>
                  <option value="0.6oz">0.6 oz</option>
                  <option value="0.7oz">0.7 oz</option>
                  <option value="0.8oz">0.8 oz</option>
                  <option value="0.9oz">0.9 oz</option>
                  <option value="1oz">1 oz</option>
                  <option value="1.1oz">1.1 oz</option>
                  <option value="1.2oz">1.2 oz</option>
                  <option value="1.3oz">1.3 oz</option>
                </select>
              </div>

              <div className={`flex flex-col ${style.selectbox}`}>
                <label>Composition: zinc alloy</label>
                <select onChange={onChangeFunc} name="composition">
                  <option value=""></option>
                  <option value="zincally">Zinc Ally</option>
                </select>
              </div>
            </div>
            <div className={`${style.button_data}`}>
              <button>Place Order</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
