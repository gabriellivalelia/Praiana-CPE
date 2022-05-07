import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css" ;

function Header() {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
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
                onClick={() => {
                  history.push("/Home");
                }}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
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
                onClick={() => {
                  history.push("/Perfil");
                }}
                href="#"
              >
                Perfil
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn btn-outline-dark"
              onClick={() => {
                history.push("/Login");
              }}
              type="button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
