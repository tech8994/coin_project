import React from 'react';
import style from "./index.module.css";
import {BsSearch} from "react-icons/bs";

export const SearchSection = () => {
  return (
    <div className={`${style.searchSection}`}>
       <div className={`py-14 ${style.nested_ection}`}>
         <div className={`${style.select_Box_section}`}>
          <select className={`${style.select_box}`}>
            <option value="allprojectcategories">All project Categories</option>
            <option value="allprojectcategories">All project Categories</option>
            <option value="allprojectcategories">All project Categories</option>
          </select>
        </div> 
        <div className={`${style.searchBox}`}>
          <input type="text" placeholder='Search Item' />
          <button><BsSearch/></button>
        </div>
       </div>
        </div>
  )
}
