import React from "react";
import "./Home.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/footer/footer";
import Carrossel from "../../Components/Carrossel/carrossel";

const Home = () => {
  return (
    <main class="main-container">
      <Header />
      <div class="hero-banner-container">
        <p className="titulo">História da empresa</p>
        <p>
             Praiana é o resultado de uma amizade de infância somada ao amor pelo
          mar que nós - Bernardo e Gabrielli - compartilhamos.
          Nos conhecemos na Orla de Copacabana, e esse foi justamente o lugar
          que escolhemos para montar nossa loja. Quando crianças, passávamos a
          tarde toda brincando na areia, e com certeza lá vivemos os melhores
          momentos da nossa infância e tivemos o prazer de ver os pores de sol
          mais encantadores possíveis. Baseados nessas lembranças, quisemos
          trazer para nossa loja cores que nos remetam à elas, e possam
          proporcionar aos nossos clientes a sensação de mar e verão que nós
          tanto amamos. Oferecemos também os mais variáveis produtos para que
          cada cliente tenha seu desejo atendido. Praiana oferece a
          versatilidade do mercado online - possibilitando à você cliente ver e
          favoritar seus produtos prediletos diretamente do conforto de seu lar
          – e a experiência de um atendimento de qualidade e o contato físico
          com os produtos que mais gostou em nossa loja física.
        </p>
      </div>
      <Carrossel/>
      <Footer />
    </main>
  );
};

export default Home;
