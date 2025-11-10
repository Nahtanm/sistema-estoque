import React from "react";

const LabelInput = ({ text, name, type, placeholder }) => {
  return (
    <label className="flex flex-col">
      <span className="font-semibold">{text} *</span>
      <input type={type} name={name} placeholder={placeholder} className="border outline-none p-2 rounded-lg border-slate-200" />
    </label>
  );
};

export default LabelInput;
