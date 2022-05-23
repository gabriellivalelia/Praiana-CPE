import React from "react";
import "./Produtos.css";
import BotaoFavoritar from "../botaoFavoritar/botaoFavoritar";

function Produtos() {
  return (
    <div className="hall">
      <div className="Produto">
        <img className="imagem" src="./imagens/biquine1.png" alt="Biquini" />
        <BotaoFavoritar />
        <div>
          <p className="nomedoproduto">Biquini Forrado asa delta</p>
          <div className="parte2">
            <p className="precodoproduto">R$109,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img className="imagem" src="./imagens/chapeu.png" alt="Chapeu" />
        <BotaoFavoritar />

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
        <BotaoFavoritar />

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
        <BotaoFavoritar />

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
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">
          Roupa de mergulho /térmica 
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$327,10</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/kitGuardaSolECaddeiras.png"
          alt="Kit guarda sol e cadeiras"
        />
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">
            Cadeira de Praia + Guarda-Sol
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$309,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img className="imagem" src="./imagens/boiasVariados.png" alt="boias" />
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">Boia Inflável Adulto</p>
          <div className="parte2">
            <p className="precodoproduto">R$84,99</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img className="imagem" src="./imagens/bone.png" alt="bone" />
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">Boné cour preto</p>
          <div className="parte2">
            <p className="precodoproduto">R$69,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/KitBrinquedosDePraia.png"
          alt="brinquedos"
        />
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">Kit verão Diversão na Areia</p>
          <div className="parte2">
            <p className="precodoproduto">R$59,50</p>
          </div>
        </div>
      </div>
      <div className="Produto">
        <img
          className="imagem"
          src="./imagens/saidadepraia.png"
          alt="saida de praia"
        />
        <BotaoFavoritar />

        <div>
          <p className="nomedoproduto">Saída de praia glamour</p>
          <div className="parte2">
            <p className="precodoproduto">R$109,50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
