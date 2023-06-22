import React from "react";
import PropTypes from "prop-types";

export const Btn = (props) => {
  return (
    <>
      <button type={props.type} disabled={props.disabled}>
        {props.value}
      </button>
    </>
  );
};

Btn.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.any,
  className: PropTypes.string,
};
