import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/footer/footer";
import Minhaconta from "../../Components/minha conta/minhaconta";
import DetalhesDaConta from "../../Components/Detalhes da conta";

function Perfil() {
  return (
    <div>
      {" "}
      <Header />
      <Minhaconta/>
      <Footer/>
    </div>
  );
}

export default Perfil;
