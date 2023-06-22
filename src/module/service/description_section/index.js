import React from 'react';
import style from "./index.module.css";
import { offer_img, slider_1, slider_2, slider_3 } from '../../../assests';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';





const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

export const Description_section = () => {
    const [value, setValue] = React.useState(2);

  return (
    <div className={`${style.description_section}`}>
    <div className={`${style.nested_desciption_section}`}>
        <div className={`${style.bigNews_section}`}>
            <h3>Special Offer</h3>
            <div className={`${style.img_bigNews}`}>
           <img src={offer_img} alt="offer-img" />           
           </div>
           <p className='text-white text-center py-2'>Lorem Ipsum is simply</p>
           <Box display={"flex"} justifyContent={"center"} py="4px">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        <div>
        <p className={style.dollar_para}><del>$100</del><span className={style.dollar_rate}>$99</span></p>
    </div>

    <div>
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={30} />
    </Box>
    </div>
<div className='flex justify-between items-center my-2 text-white'>
   <p>Available:18</p>
   <p>Sold:20</p>
</div>
<div className={`flex items-center gap-3 ${style.timing}`}>
  <p> <span>Hurry Up ! </span> Offer End In : </p>
  <ul>
<li> <span> 200</span> Days </li>
<li> <span> 61</span> Hours </li>
<li> <span> 32</span> Mins </li>
<li> <span> 46</span> Sec </li>
  </ul>
</div> 

        </div>
        <div className={`${style.movies_section_carosal}`}>
         <div className={`${style.fiestImg} w-full`}>
           <img src={slider_1} alt="slider-1" />
         </div>
         <div className='flex gap-7'>
            <img src={slider_2} alt="slider_2" />
            <img src={slider_3} alt="slider_3" />
         </div>
        </div>
    </div>
    </div>
  )
}
