import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../store/actions";
import Input from "./Input";

const Signup = (props) => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const { name = '', email = '', password = '', repassword = '' } = user;
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repassword) {
      props.signUp(name, email, password, history);
    } else {
      alert("Passwords don't match");
    }
  }

  return (
    <div className="sign-up">
      <h2>Signup</h2>
      <div className="signup-form">
        <Input required type="text" label="Name" value={name} name="name" onChange={handleChange} />
        <Input required type="email" label="E-Mail" value={email} name="email" onChange={handleChange} />
        <Input required type="password" label="Password" value={password} name="password" onChange={handleChange} />
        <Input required type="password" label="Retype Password" value={repassword} name="repassword" onChange={handleChange} />
        <button onClick={handleSubmit}>Done!</button>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  signUp: (name, email, password, history) => dispatch(signUp(name, email, password, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);