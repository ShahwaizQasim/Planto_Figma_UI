import React from "react";
import { images } from "../../utils/images";

const Button = ({
  label,
  className = "bg-transparent border border-white hover:bg-white-600 hover:text-black text-white py-2 px-4 rounded font-inter-regular",
  onClick = () => {},
  icon = false,
  iconSrc = null,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <img src={iconSrc} alt="Play" className="w-8 h-8 mr-2" />}
      {label}
    </button>
  );
};

export default Button;
