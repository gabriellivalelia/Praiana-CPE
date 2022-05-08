import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css";

function Header() {
  const history = useHistory();

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {" "}
          <img src="./imagens/praianalogo.svg" alt="Logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                style={{ color: "white" }}
                onClick={() => {
                  history.push("/Home");
                }}
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                style={{ color: "white" }}
                onClick={() => {
                  history.push("/Vitrine");
                }}
                href="#"
              >
                Vitrine
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                style={{ color: "white" }}
                onClick={() => {
                  history.push("/Perfil");
                }}
                href="#"
              >
                Perfil
              </a>
            </li>
          </ul>
          <form class="d-flex" style={{ backgroundColor: "white" }}>
            <button
              class="btn btn-outline-info"
              onClick={() => {
                history.push("/Login");
              }}
              type="button"
            >
              Login
            </button>
          </form>
          <form
            class="d-flex"
            style={{ backgroundColor: "pink" }}
            filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))"}
          >
            <button
              class="btn btn-outline-light"
              onClick={() => {
                history.push("/Cadastro");
              }}
              type="button"
            >
              Cadastre-se
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
