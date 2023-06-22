import React from 'react';
import { nft_1, nft_2, nft_3, nft_4, nft_5, nft_6, nft_7, nft_8 } from '../../../assests';
import style from "./index.module.css";
import { Btn } from '../../../component';


let initialData=[
    {
        id:1,
        img:nft_1,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:2,
        img:nft_2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:3,
        img:nft_3,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:4,
        img:nft_4,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:5,
        img:nft_5,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:6,
        img:nft_6,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:7,
        img:nft_7,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:8,
        img:nft_8,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:9,
        img:nft_2,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:10,
        img:nft_3,
        desc:"Lorem Itpsum is simply dummy",
    },
    {
        id:11,
        img:nft_5,
        desc:"Lorem Itpsum is simply dummy",
    },
]

export const Product_Section_NFT = () => {
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
