import React from "react";
import style from "./index.module.css";
import {user} from "../../../assests"
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";



export const AllNFTS = ({datas, setId}) => {
  return (
    <div className={style.allnft}>
      <div className={style.nested_nfts}>
         {datas.map((value) =>{
            return(
                // <NavLink to={"/specfic-data"}>
                <div className={style.card} key={value.id} onClick={() => setId(value.id)}>
                <img src={value.img1} alt="nft" className={style.nft_img} />
                <div className="relative">
                  <div className={style.number}>
                    <p>478 : 19 : 9 : 0</p>
                  </div>
                </div>
                <div className={`p-8 ${style.content}`}>
                  <div className="flex justify-between">
                    <img src={user} alt="user" />
                    <div className={`flex gap-1 items-center ${style.hearts}`}>
                      <CiHeart />
                      <small>1</small>
                    </div>
                  </div>
                  <NavLink className="pt-5" to={"/specfic-data"}>{value.desc1}</NavLink>
                  {/* <p></p> */}
                  <p className={`py-0 ${style.digital_number}`}>{value.dec2}</p>
                </div>
              </div>        
            //   </NavLink>
            )
         })}

      </div>
    </div>
  );
};
