import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/footer/footer"
import Produtos from "../../Components/Produtos";

const produto1 = {
  
  endereçoDaImagem: "./imagens/biquine1.png",
  nomeDoProduto: "Biquini Forrado Suplex modelo Cropped top faixa asa delta",
  valorDoProduto: "R$109,50"
}


function Vitrine() {
  return (
    <div>
      <Header/>
      <Produtos/>
      <Footer/>
    </div>
  )
}

export default Vitrine;
