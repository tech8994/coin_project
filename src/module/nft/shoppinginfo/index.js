import React from "react";
import style from "./index.module.css";

export const ShoppingInfo = () => {
  return (
    <div className={`${style.ShoppingInfo}`}>
      <div className={`${style.nested_shoppinginfo}`}>
        <h1>Lorem Ipsum Is Simply Dummy Text Of The Printing</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
        </p>
          <div className={`${style.btn_shoopping}`}>
            <button>let's Get Started</button>
          </div>
      </div>
    </div>
  );
};
