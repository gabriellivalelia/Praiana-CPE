import React from "react";
import "./Produtos.css";

function Produtos() {
  return (
    <div className="hall">
      <div className="Produto1">
        <img className="imagem" src="./imagens/biquine1.png" alt="Biquini" />
        <div>
          <p className="nomedoproduto">
            Biquini Forrado asa delta
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$109,50</p>
           {/*  <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto2">
        <img className="imagem" src="./imagens/chapeu.png" alt="Chapeu" />
        <div>
          <p className="nomedoproduto">
            Chapéu Floppy 
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$58,00</p>
            {/* <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto3">
        <img
          className="imagem"
          src="./imagens/biquiniInfantil.png"
          alt="biquini iinfaltil"
        />
        <div>
          <p className="nomedoproduto">Biquini infantil</p>
          <div className="parte2">
            <p className="precodoproduto">R$69,50</p>
           {/*  <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto4">
        <img
          className="imagem"
          src="./imagens/ocullosDeSol.png"
          alt="Oculos de sol"
        />
        <div>
          <p className="nomedoproduto">Óculos de sol Adulto</p>
          <div className="parte2">
            <p className="precodoproduto">R$99,00</p>
            {/* <a href="#" className="botaofavoritar" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto5">
        <img
          className="imagem"
          src="./imagens/roupaDeMergulho.png"
          alt="Roupa de mergulho"
        />
        <div>
          <p className="nomedoproduto">
            Giantree Roupa de mergulho/térmica/adulto
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$327,10</p>
            {/* <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto6">
        <img
          className="imagem"
          src="./imagens/kitGuardaSolECaddeiras.png"
          alt="Kit guarda sol e cadeiras"
        />
        <div>
          <p className="nomedoproduto">
            Cadeira de Praia em Alumínio + Guarda-Sol Aluminio
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$309,50</p>
           {/*  <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto7">
        <img className="imagem" src="./imagens/boiasVariados.png" alt="boias" />
        <div>
          <p className="nomedoproduto">
            Boia Inflável Adulto
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$84,99</p>
            {/* <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto8">
        <img className="imagem" src="./imagens/bone.png" alt="bone" />
        <div>
          <p className="nomedoproduto">
            Boné cour preto 
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$69,50</p>
            {/* <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto9">
        <img
          className="imagem"
          src="./imagens/KitBrinquedosDePraia.png"
          alt="brinquedos"
        />
        <div>
          <p className="nomedoproduto">
            Kit verão Diversão na Areia
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$59,50</p>
            {/* <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
      <div className="Produto10">
        <img className="imagem" src="./imagens/saidadepraia.png" alt="saida de praia" />
        <div>
          <p className="nomedoproduto">
            Saída de praia glamour
          </p>
          <div className="parte2">
            <p className="precodoproduto">R$109,50</p>
           {/*  <a href="#" class="btn btn-outline-info">
              sz
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
