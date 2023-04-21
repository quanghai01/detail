import React from "react";
import { Link } from "react-router-dom";
const Button = ({ children, to, href, onClick, className }) => {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <div>
      <Comp
        className={`flex flex-row items-center text-[22px] btn-effect ${
          className || ""
        }`}
        {...props}
      >
        {children || ""}
      </Comp>
    </div>
  );
};

export default Button;
