import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      if (password !== "bar" || userName !== "foo") {
        alert("Please enter valid details");
      } else if (password === "bar" && userName === "foo") {
        localStorage.setItem("name",password);
        navigate("/home");
      }
    } else {
      alert("Please enter  details");
    }
  };
  return (
    <div className={style.Loginmodel}>
      {/* <span>Kindly Log Here</span> */}

      <form onSubmit={onSubmit} className={style.formModel}>
        <input
          type="text"
          required={true}
          placeholder="Enter your Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          required={true}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
