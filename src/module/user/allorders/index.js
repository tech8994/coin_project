import React, {useState, useEffect} from "react";
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from "../../../layout";
import { TopBanner } from "../banner_section";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export const Allorders = () => {
    let data="ALL ORDERS";


    let navigate=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login");
      }
      },[]);


    let [tableDataOrder, setTableDataOrder]=useState([]);

    useEffect(() =>{
      axios
        .post("https://coin-apps-dad75aa17cff.herokuapp.com/order",{
          userID: localStorage.getItem("userid")
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.result.length) {
              console.log(resp);
              setTableDataOrder(resp.data.result);
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
      <div className={`${style.allorders}`}>
        <Header />
        <SecondHeader />
        <div className={`${style.nested_allorder}`}>
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
      {tableDataOrder.length > 0 ? (

<div className={`${style.table_section}`}>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
    <TableRow className={`${style.tablehead}`}>
    <TableCell>Id</TableCell>
           <TableCell>Composition</TableCell>
           <TableCell>Diameter</TableCell>
           <TableCell>Thickness</TableCell>
           <TableCell>Weight</TableCell>
           <TableCell>Email</TableCell>
           <TableCell>Status</TableCell>
  </TableRow>
</TableHead>
        <TableBody className="tableBody_section">
         
        {tableDataOrder.map((value) =>{
            return(
             <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
              >
              {value._id && value._id}
              </StyledTableCell>
              <StyledTableCell>
                {value.composition && value.composition}
              </StyledTableCell>
              <StyledTableCell>
              {value.diameter && value.diameter}
              </StyledTableCell>
              <StyledTableCell>
              {value.thickness && value.thickness}
              </StyledTableCell>
              <StyledTableCell>
                {value.weight && value.weight}
              </StyledTableCell>
              <StyledTableCell>
                {value.email && value.email}
              </StyledTableCell>
              <StyledTableCell className={`${style.statusdata}`}>
                <span>
                Pending
                </span>
              </StyledTableCell>
              </StyledTableRow>
            )
          })}
  </TableBody>
      </Table>
    </TableContainer>
</div>
    ):<div className={`${style.message_order}`}>
    <p>There is no order avaliable</p>
   </div> }

      <Footer />
      <ToastContainer/>
    </>
  );
};
