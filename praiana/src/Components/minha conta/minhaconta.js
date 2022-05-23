import React from "react";
import { useHistory } from "react-router-dom";
import "./minhaconta.css";

function Minhaconta() {
  const history = useHistory();

  return (
    <div className="conta" role="group">
      <div className="Tittle">
        <p>Minha conta</p>
      </div>
      <div className="botoes" style={{ backgroundColor: "white" }}>
        <button class="btn btn-outline-info" for="detalhes">
          Ver detalhes da conta
        </button>

        <button
          class="btn btn-outline-info"
          for="Sair"
          style={{ color: "red" }}
          onClick={() => {
            history.push("/Home");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Minhaconta;
