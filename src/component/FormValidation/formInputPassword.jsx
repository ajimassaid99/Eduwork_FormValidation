import { useState } from "react";
const FormInputPassword = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true)
  }

  const toggleShowPassword = (event) => {
    event.preventDefault()
    setShowPassword(!showPassword);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <div className="passwordInput">
        <input
          {...inputProps}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
        />
        <button onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInputPassword;