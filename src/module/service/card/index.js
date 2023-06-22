import React from "react";
import { client1, client2 } from "../../../assests";
import style from "./index.module.css";
import { FaQuoteLeft } from "react-icons/fa";

export const Card = () => {
  return (
    <div className={`w-full ${style.Card}`}>
      <div className={`${style.nested_section}`}>
        <div className={`${style.main_card}`}>
          <div className={`${style.img}`}>
            <img src={client1} alt="client1" />
          </div>
          <div className={style.content_section}>
            <FaQuoteLeft />
            <div className={`block mt-5 ${style.testimonls}`}>
              <h1>Alice Howard</h1>
              <p>
                {" "}
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.main_card}`}>
          <div className={`${style.img}`}>
            <img src={client2} alt="client1" />
          </div>
          <div className={style.content_section}>
            <FaQuoteLeft />
            <div className={`block mt-5 ${style.testimonls}`}>
              <h1>John Romero</h1>
              <p>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rating_stars}>
        <div className={style.flex_wrapper}>
          <div className={`${style.single_chart}`}>
            <svg
              viewBox="0 0 36 36"
              className={`${style.circular_chart} ${style.orange}`}
            >
              <path
                className={style.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray="80, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                80%
              </text>
            </svg>
            <div className={` ${style.content_pert}`}>
              <p>Explore The Feather</p>
              <h5>Codes</h5>
              <p>
                Lorem ipsum dolor sit ameet. Aenean commodo nec ligula eget
                dolor. Aenean et massa. Cum sociis Theme elit nisi.
              </p>
            </div>
          </div>

          <div className={`${style.single_chart}`}>
            <svg
              viewBox="0 0 36 36"
              className={`${style.circular_chart} ${style.orange}`}
            >
              <path
                className={style.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray="76, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                76%
              </text>
            </svg>
            <div className={` ${style.content_pert}`}>
              <p>Explore The Feather</p>
              <h5>Happy Clients</h5>
              <p>
                Lorem ipsum dolor sit ameet. Aenean commodo nec ligula eget
                dolor. Aenean et massa. Cum sociis Theme elit nisi.
              </p>
            </div>
          </div>

          <div className={style.single_chart}>
            <svg
              viewBox="0 0 36 36"
              className={`${style.circular_chart} ${style.orange}`}
            >
              <path
                className={style.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray="65, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                65%
              </text>
            </svg>
            <div className={` ${style.content_pert}`}>
              <p>Explore The Feather</p>
              <h5>Projects</h5>
              <p>
                Lorem ipsum dolor sit ameet. Aenean commodo nec ligula eget
                dolor. Aenean et massa. Cum sociis Theme elit nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
