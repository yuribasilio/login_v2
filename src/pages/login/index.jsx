import React, { useState } from "react";
import "./styles.css";

export default function AppLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    console.log("submit", {email, password});
  }

  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Bem-Vindo!</span>
              <div className="wrap-input">
                <input className={email === "" ? "input" : "input has-value"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={password === "" ? "input" : "input has-value"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
              <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={handlerSubmit}>Login</button>
              </div>
              <div className="text-center">
                <span className="txt1">Não possui conta?</span>
                <a className="txt2" href="#">
                  Criar conta.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
