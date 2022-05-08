import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="Logo">
        <img src="./imagens/praianalogo.svg" alt="Logo"></img>
        <hr/>
        <p className="Texto1">©PRAIANA - Todos os direitos reservados</p>

      </div>
      <div className="redes">
          <div className="apps">
          <img src="./imagens/insta.svg" alt="Instagram" />
          <img src="./imagens/twitter.svg" alt="Twitter" />
          <img src="./imagens/whatsapp.svg" alt="Whatsapp" />
          <p className="texto2" >Siga-nos nas redes sociais</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
