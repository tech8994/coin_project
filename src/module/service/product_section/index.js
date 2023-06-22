import React from 'react';
import { product2, product3, product4 } from '../../../assests';
import style from "./index.module.css";
import { Btn } from '../../../component';


let initialData=[
    {
        id:1,
        img:product2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:2,
        img:product3,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:3,
        img:product4,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:4,
        img:product2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:5,
        img:product3,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:6,
        img:product4,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:7,
        img:product2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:8,
        img:product3,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:9,
        img:product4,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:10,
        img:product2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:11,
        img:product3,
        desc:"Lorem Itpsum is simply dummy",
    },
]

export const Product_Section = () => {
  return (
    <div className={style.product_section}>
        <div className={style.nested_product_section}>
          {initialData.map((value) =>{
            return(
                <div key={value.id} className={`my-10 ${style.special}`}>
                <img src={value.img} alt="product2" />
                <div>
                  <p>{value.desc}</p>
                  <Btn value={"View Product"} />
                </div>
             </div>
            )
          })}

        </div>
        </div>
  )
}
