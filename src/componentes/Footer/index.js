import React from "react";
import './style.css';

export default function Footer() {
  return(
    <footer>
      <div className="rodape wrap">
        
        <img className="logo-footer" src="assets/logo2.png" alt="logo da marca de cake-store"/>

        <div className='info'>
          <span>
            Endereço
          </span>
          <p>
            Rua Doces<br/>
            Encantados, 123 <br/>
            Rio de Janeiro, RJ 12345-678
          </p>
        </div>
        
        <div className='info'>
          <span>Contato</span>
          <p>
            cakestore@contato.com <br/>
            Tel: (11) 4002-8922
          </p>
        </div>  
        
        <div className='info'>
          <span>Horários</span>
          <p>
            ABERTO TODOS OS DIAS <br/>
            10:00 - 22:00
          </p>
        </div>

      </div>
        
      <div className="footer-autoral">
        <p>Cake Store. desenvolvido por Ygor Torres</p>
      </div>
    </footer>
  );
}