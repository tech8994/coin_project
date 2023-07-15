import React, {useState, useEffect} from "react";
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from "../../../layout";
import { TopBanner } from "../banner_section";
import { imgbitcoin } from "../../../assests";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const UpdateUserProfile = () => {
    let data="User Profile"

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let navigate=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login");
      }
      },[]);


  return (
    <>
      <div className={`${style.userprofile}`}>
        <Header />
        <SecondHeader />
        <div className={`${style.nested_userprofile}`}>
        <TopBanner data={data} />
        </div>
      </div>
      <div className={`flex gap-6 justify-center items-center ${style.nested_dashboard_content}`}>
      <div className={`${style.tail}`}>
        <NavLink to="/user-dashboard">
            User Dashboard
          </NavLink>
        </div>
        <div className={`${style.tail}`}>
        <NavLink to="/all-orders">
            All Orders
        </NavLink>
        </div>
        <div className={`${style.tail}`}>
          <NavLink to="/user-profile">
            My Profile
          </NavLink>
        </div>
        {/* <div className={`${style.tail}`}>
          <NavLink to="/update-password">
            Change Password
          </NavLink>
        </div> */}
      
      </div>
      <div className={`${style.profile_section}`}>
         <div className={`${style.profile_header}`}>
            <h5>profile</h5>
             <button onClick={handleOpen}>update profile</button>
        </div> 
        <div className={`${style.profile_content}`}>
             <div>
                <img src={imgbitcoin} alt="imgbitcoing" />
             </div>
             <div className={`${style.profile_data}`}>
                <div>
                    <p>Name: <span>{localStorage.getItem("fullname") && localStorage.getItem("fullname")}</span></p>
                </div>
                <div>
                    <p>Email: <span>{localStorage.getItem("email") && localStorage.getItem("email")}</span></p>
                </div>
                <div>
                    <p>Phone Number: <span>{localStorage.getItem("number") && localStorage.getItem("number")}</span></p>
                </div>
                <div>
                    <p>Address: <span>{localStorage.getItem("address") && localStorage.getItem("address")}</span></p>
                </div>
                <div>
                    <p>City: <span>{localStorage.getItem("city") && localStorage.getItem("city")}</span></p>
                </div>
                <div>
                    <p>Country: <span>{localStorage.getItem("country") && localStorage.getItem("country")}</span></p>
                </div>
                <div>
                    <p>Province: <span>{localStorage.getItem("province") && localStorage.getItem("province")}</span></p>
                </div>
                <div>
                    <p>Zip Code: <span>{localStorage.getItem("zipCode") && localStorage.getItem("zipCode")}</span></p>
                </div>
             </div>
        </div>
      </div>
      <Footer />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styles}>
            <div className="flex justify-between items-center my-8">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Profile 
            </Typography>
            <button onClick={handleClose}>X</button>
            </div>
            <form className={style.formStyle}>
              <div className={style.input_name}>
                  <label>Name</label>
                  <input type="text" placeholder="Full Name" />
              </div>
              <div className={style.input_name}>
                  <label>Phone Number</label>
                  <input type="number" placeholder="Phone Number" />
              </div>
              <div className="my-4 flex justify-end">
                 <button>update</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
