import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

import './style.css';

export default function PaginaInfo() {
 return(
  <div>
    <Header />
    
    <main>

      <section className='banner sobre'>
        <div className='wrap texto-banner'>
          <h1>A Cake Store</h1>
        </div>
      </section>

      <section>
        <div className='texto-sobre wrap'>
        <h3>Sobre Nós</h3>
        <span>Nós simplesmente amamos doces!</span>

          <p>Somos um empresa apaixonada pelo que faz. Colocamos amor em cada produto produzido. Fazemos o melhor dos doces para os nossos clientes e gostamos de receber elogios. Estamos operando desde 20XX com as melhores matérias-primas para a produção final de nossas delícias açucaradas. Vendemos tanto para varejo como para atacado.</p>
          
          <p>Nossos clientes podem comprar os nossos produtos e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Tambpem vendemos para estabelecimentos e criamos eventos como festa de aniversário., formaturas e eventos empresariais. Para contratar nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa com o melhor bolo da cidade.</p>
        </div>
      </section>

      <section>
        <div className='imagens'>
          <img src='assets/doces.png' alt='imagem de doces'/>
          <img src='assets/doces2.jpg' alt='imagem de doces 2'/>
        </div>
      </section>

    </main>

    <Footer />
  </div>
 ); 
}