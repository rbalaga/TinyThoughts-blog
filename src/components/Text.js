import React, { useState } from "react";

const Text = ({ label, value, onUpdate, maxLength = 200 }) => {
  const [isValid, setIsValid] = useState(true);
  const [touched, isTouched] = useState(false);

  const handleChange = (e) => {
    setIsValid(e.target.validity.valid);
    onUpdate(e.target.value.replace(/(?:\\r)/g, "\\n\\n"));
  };

  const handleBlur = (e) => {
    isTouched(true);
  };

  return (
    <div className={`text-box ${touched && !isValid && "hasError"}`}>
      <span className="label">{label}</span>
      <textarea
        maxLength={maxLength}
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Text;
