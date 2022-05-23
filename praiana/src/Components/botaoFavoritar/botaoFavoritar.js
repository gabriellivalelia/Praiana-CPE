import React, { useState } from "react";
import "./botaoFavoritar.css";

function BotaoFavoritar() {
     const[preenchido, setPreenchido]  = useState(false);
     function  handleClick(){
         setPreenchido(!preenchido);
     }
     
  return (
    <div className="botaoContent">
    <button className="Botao" onClick={handleClick}>
        {preenchido ? (
            <img src="./imagens/coracaoPreenchido.svg" alt="Coracao preenchido" />
        ) : (
            <img src="./imagens/coracaoContorno.svg" alt="coracao" />
        )}
      
      
    </button>
    </div>
  );
}

export default BotaoFavoritar;