import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DetalhesDaConta from "../Detalhes da conta";
import ProdutosFavoritos from "../ProdutosFavoritos";
import "./minhaconta.css";

function Minhaconta() {
  const [mostrarComponenteFav, setMostrarComponenteFav] = useState(false);
  const [mostrarComponenteDet, setMostrarComponenteDet]  = useState(false);

  function mostrarDet() {
    setMostrarComponenteDet (true);
    setMostrarComponenteFav (false);
  }

  function mostrarFav() {
    setMostrarComponenteDet(false);
    setMostrarComponenteFav(true);
  }
  const history = useHistory();

  return (
    <div className="pagina" >
    <div className="conta" role="group">
      <div className="Tittle">
        <p>Minha conta</p>
      </div>
      <div className="botoes" style={{ backgroundColor: "white" }}>
        <button
          class="btn btn-outline-info"
          for="detalhes"
          onClick={mostrarDet}
        >
          Ver detalhes da conta
        </button>
        <button
          class="btn btn-outline-info"
          for="detalhes"
          onClick={mostrarFav}
        >
          Ver meus favoritos
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
    {mostrarComponenteDet && (<DetalhesDaConta/>) };
    {mostrarComponenteFav && (<ProdutosFavoritos/>) };

    </div>
  );
}

export default Minhaconta;
