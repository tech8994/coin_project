import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { logo } from "../../assests";
import { TfiEmail } from "react-icons/tfi";
import { BiPhone } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Header = () => {
  let [fullName, setFullName] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let getUserNameFunc = () => {
    if (localStorage.getItem("fullname")) {
      // navigate("/login");
      setFullName(localStorage.getItem("fullname"));
      console.log(localStorage.getItem("fullname"));
    }
  };

  let logoutFunc = () => {
    localStorage.removeItem("fullname");
    localStorage.removeItem("token");
    window.location.reload("/");
  };
  useEffect(() => {
    getUserNameFunc();
  }, []);

  let [count, totalCount] = useState(0);

  useEffect(() => {
    axios
      .post("https://coin-apps-dad75aa17cff.herokuapp.com/order", {
        userID: localStorage.getItem("userid"),
      })
      .then((resp) => {
        console.log(resp);
        if (resp.data.result.length) {
          totalCount(resp.data.result.length);
        } else {
          // toast.error("There is no order found");
        }
      })
      .catch((err) => {
        // toast.error("here is no order found");
        console.log(err);
      });
  });

  return (
    <>
      <div className={`w-full ${style.header}`}>
        <div
          className={`${style.nested_header} flex justify-between items-center`}
        >
          <div className={`${style.logo}`}>
            <img src={logo} alt="logo" />
          </div>
          <div className={`${style.link_section}`}>
            <ul>
              <li className={`${style.first_name}`}>
                <TfiEmail />
                <div className={`${style.top_text}`}>
                  <p>Company's Email</p>
                  <a href="#">info@gmail.com</a>
                </div>
              </li>
              <li className={`${style.first_name}`}>
                <BiPhone />
                <div className={`${style.top_text}`}>
                  <p>Call Us</p>
                  <a href="#">123456780</a>
                </div>
              </li>

              {fullName == "" ? (
                <li className={`${style.first_name}`}>
                  <FaRegUser />
                  <div className={`${style.top_text}`}>
                    <p>Hi Login!</p>
                    <NavLink to="/login">Your Account</NavLink>
                  </div>
                </li>
              ) : (
                <>
                  <li className={`${style.first_name}`}>
                    <FaRegUser />
                    <div className={`${style.top_text}`}>
                      <p>Hi Login!</p>
                      <div className={`cursor-pointer`} onClick={handleClick}>
                        {fullName && fullName}
                      </div>
                    </div>
                  </li>
                  {/* <Button
              //  id="basic-button"
              //  aria-controls={open ? 'basic-menu' : undefined}
              //  aria-haspopup="true"
              //  aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
             >
               Dashboard
             </Button> */}
                </>
              )}
              {localStorage.getItem("token") ? (
                <li className={`${style.first_name} ${style.last_item}`}>
                  <AiOutlineShoppingCart />
                  <div className={`${style.top_text}`}>
                    <p>Add To</p>
                    <NavLink to="/all-orders">{count && count} Cart</NavLink>
                  </div>
                </li>
              ) : (
                <li className={`${style.first_name} ${style.last_item}`}>
                  <AiOutlineShoppingCart />
                  <div className={`${style.top_text}`}>
                    <p>Add To</p>
                    <NavLink to="/all-orders">Cart</NavLink>
                  </div>
                </li>
              )}

              {fullName && (
                <li className={`${style.btn_logout}`}>
                  <button onClick={logoutFunc}>Logout</button>
                </li>
              )}
            </ul>
          </div>
          <div className={`${style.sidebar_responsive}`}>
            <div className={`flex items-center ${style.icons}`}>
              <FaRegUser className="text-2xl" />
              <AiOutlineShoppingCart className="text-2xl" />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <NavLink to="/user-dashboard">Dashboard</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/all-orders">All Orders</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/user-profile">My account</NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

{
  /* <div className={`${style.first_section}`}>
    
    </div> */
}
