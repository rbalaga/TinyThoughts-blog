import React, { useState } from "react";

const Input = ({ type, label, value, name, required, maxLength, onChange }) => {
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setIsValid(e.target.validity.valid);
    onChange(e);
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  return (
    <div className={`input-box ${touched && !isValid && "hasError"}`}>
      <span className="label">{label}</span>
      <input
        maxLength={maxLength}
        required={required}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
