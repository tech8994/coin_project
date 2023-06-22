import React from "react";
import style from "./index.module.css";
import { Btn } from "../../../component";
import { about_img } from "../../../assests";

export const AboutDesc = () => {
  return (
    <div className={style.about_data_section}>
      <div className={`my-20 ${style.nested_about}`}>
        <div className={`flex gap-5 items-center ${style.nested_about_desc}`}>
          <div className={style.desc_section}>
            <h1>
              About The Your
              <br />
              <span className={`${style.about_heading}`}>
                {" "}
                Company Name
              </span>{" "}
              <span className={style.yellow_about_desc}>.</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <div className={style.btn_about_desc}>
              <Btn value={"let's Get Started"} />
            </div>
          </div>
          <div className={`${style.nested_about_phto}`}>
            <img src={about_img} alt="about_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
