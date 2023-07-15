import React, {useEffect, useState} from "react";
import "./App.css";
// import { Header, SecondHeader } from './layout';
import {
  Home,
  About,
  Service,
  Register,
  ContactUs,
  NFT,
  PhsicalCoin,
  Login,
  UserDashboard,
  Allorders,
  UpdateUserProfile,
  UpdatePassowrd,
  CoinSection,
  DigitalCoin,
  SpecificNFT
} from "./module";
import {
  nft1,
  user,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
  nft13,
  nft14,
  nft15,
} from "./assests";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

let datas=[
  {
      id:1,
      img1: nft1,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:2,
      img1: nft2,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:3,
      img1: nft3,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:4,
      img1: nft4,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:5,
      img1: nft5,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:6,
      img1: nft6,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:7,
      img1: nft7,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:8,
      img1: nft8,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:9,
      img1: nft9,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:10,
      img1: nft10,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:11,
      img1: nft11,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:12,
      img1: nft12,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  {
      id:13,
      img1: nft13,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  ,{
      id:14,
      img1: nft14,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
  ,{
      id:15,
      img1: nft15,
      desc1:'DEMO-ART-005 #1',
      dec2: '0.090000 MATIC',
  },
]

function App() { 
   const [Id, setId]=useState(null);
   const [speicficdata, setSpecificNFT]=useState(null);
    const [data, setData]=useState("");
    useEffect(() =>{
      axios
      .get("https://coin-apps-dad75aa17cff.herokuapp.com/all-slides")
      .then((resp) => {
        console.log(resp);
        if (resp.data.result.length) {
          setData(resp.data.result);
        } else {
          // toast.error("There is no order found");
        }
      })
      .catch((err) => {
        // toast.error("here is no order found");
        console.log(err);
      });
    },[])

    let getSpecifFunc=()=>{
      let resp=datas.filter(value => value.id === Id);
      console.log(resp);
      setSpecificNFT(resp)
    }
   useEffect(() =>{
     getSpecifFunc();
   },[Id])
   console.log(speicficdata);
   console.log(Id);

  return (
    <div className="coin_proj">
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Service data={data} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/contactus" element={<ContactUs data={data} />} />
        <Route path="/physical-coin" element={<PhsicalCoin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/all-orders" element={<Allorders/>} />
        <Route path="/user-profile" element={<UpdateUserProfile/>}/>
        <Route path="/update-password" element={<UpdatePassowrd/>} />
        <Route path="/phsical-status" element={<CoinSection/>} />
        <Route path="/digital-coin" element={<DigitalCoin datas={datas} setId={setId}/>}/>  
        <Route path="/specfic-data" element={<SpecificNFT speicficdata={speicficdata} />}/>
      </Routes>
    </div>
  );
}

export default App;
