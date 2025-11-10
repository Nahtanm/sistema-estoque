import React from "react";

const Button = ({ text, className, children }) => {
  return (
    <button type="button" className={className}>
      {children}
      {text}
    </button>
  );
};

export default Button;
