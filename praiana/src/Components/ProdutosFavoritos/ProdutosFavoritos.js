import React from "react";
import "./ProdutosFavoritos.css"

function Produtosfavoritos(){
    return(
        <div className="Base">
          <div className="Produto">
        <img className="imagem" src="./imagens/biquine1.png" alt="Biquini" />
        <div>
          <p className="nomedoproduto">Biquini Forrado asa delta</p>
          <div className="parte2">
            <p className="precodoproduto">R$109,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img className="imagem" src="./imagens/chapeu.png" alt="Chapeu" />
        <div>
          <p className="nomedoproduto">Chapéu Floppy</p>
          <div className="parte2">
            <p className="precodoproduto">R$58,00</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/biquiniInfantil.png"
          alt="biquini iinfaltil"
        />
        <div>
          <p className="nomedoproduto">Biquini infantil</p>
          <div className="parte2">
            <p className="precodoproduto">R$69,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/ocullosDeSol.png"
          alt="Oculos de sol"
        />
        <div>
          <p className="nomedoproduto">Óculos de sol Adulto</p>
          <div className="parte2">
            <p className="precodoproduto">R$99,00</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/roupaDeMergulho.png"
          alt="Roupa de mergulho"
        />
        <div>
          <p className="nomedoproduto">
          Roupa de mergulho /térmica 
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$327,10</p>
          </div>
        </div>
      </div>

        </div>
    )
};

export default Produtosfavoritos;