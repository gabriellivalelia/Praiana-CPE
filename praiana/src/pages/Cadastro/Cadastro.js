import React, { useState } from "react";
import "./Cadastro.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/footer/footer";

function Cadastro() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfpassword] = useState();
  const [infclient, setInfclient] = useState();

  function login() {
    if (password == confpassword) {
      alert("Bem vindo(a), " + name + "! Aproveite nosso site.");
    } else {
      alert("As senhas digitadas são diferentes.");
    }
  }

  return (
    <div className="pagina">
      <Header />
      <div className="base">
        <div className="Cadastro">
          <div className="titulo">
            <h1>Cadastro</h1>
          </div>
          <div className="forms">
            <div
              class="mb-2"
              id="nome completo"
              onChange={(e) => setName(e.target.value)}
            >
              <label for="nome completo" class="form-label">
                Nome Completo
              </label>
              <input type="text" class="form-control" />
            </div>
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
            <div
              class="mb-2"
              id="Confpassword"
              onChange={(e) => setConfpassword(e.target.value)}
            >
              <label for="Confpassword" class="form-label">
                Confirme sua senha
              </label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3" id="conte-nos mais sobre você">
              <label
                for="conte-nos mais sobre você"
                class="form-label"
                onChange={(e) => setInfclient(e.target.value)}
              >
                Conte-nos mais sobre você
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="button">
            <button
              type="submit"
              style={{ backgroundColor: "orange" }}
              className="btn btn-outline-light"
              onClick={login}
            >
              Finalizar cadastro
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;
