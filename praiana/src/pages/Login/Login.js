import React, { useState } from "react";
import "./Login.css";
import Header from "../../Components/Header/header";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/footer/footer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function confirma() {
    if (password === "1234") {
      alert("Bem vindo(a), " + "! Aproveite nosso site.");
        history.push("/Perfil");;
    } else {
      alert("Senha Incorreta");
    }
  }

  return (
    <div className="pagina">
      <Header />
      <div className="base">
        <div className="Login">
          <div className="titulo">
            <h1>Login</h1>
          </div>
          <div className="forms">
            <div
              class="mb-2"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            >
              <label for="email">Email</label>
              <input type="text" class="form-control" />
            </div>
            <div
              class="mb-2"
              id="Password"
              onChange={(e) => setPassword(e.target.value)}
            >
              <label for="Password" class="form-label">
                Senha
              </label>
              <input type="password" class="form-control" />
            </div>
          </div>
          <div className="button">
            <button
              type="submit"
              style={{ backgroundColor: "orange" }}
              className="btn btn-outline-light"
             onClick={confirma}
            >Entrar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;