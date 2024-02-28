import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.css';

export default function PaginaInicial() {
  return(
    <div>
      <Header/>
      
      <main>
        <section className='banner'>
          <div className='wrap texto-banner'>
          </div>
        </section>

        <section className='card'>
          <img src='assets/doces-sabores.jpg' alt='banner de texto dos sabores'/>
          <div className='card-text'>
            <h3 className='titulo-card'>Nossas Delícias</h3>
            <span>Sabores frescos e irresistíveis</span>

            <p>
              Doces bons são aqueles feitos com os melhores ingredientes!
              Aqui na confeitaria, todos os nossos produtos são preparados com ingredientes naturais, à base de frutas e livres de conservantes! Além disso, oferecemos opções sem lactose e sem açúcar. Venha nos visitar e descubra como é possível que os doces sejam deliciosos e saudáveis ao mesmo tempo!
            </p>
          </div>
        </section>

        <section className='card'>
          <div className='card-text'>
            <h3 className='titulo-card'>Nossos Eventos Especiais</h3>
            <span>Sabores fora do comum!</span>
            <p>Mais que uma simples massa recheada, é uma extensão do seu lar! Estamos aqui, ansiosos para oferecer os mais adoráveis encontros, recheados com as melhores misturas de sabores da sua vida! Venha nos visitar e desfrute de momentos de pura doçura conosco.</p>
          </div>
          <img src='assets/doces-eventos.jpg' alt='banner dos eventos'/>
        </section>

        <section className='card'>
          <img src='assets/doces.png' alt='imagem de doces em um mostruário'/>
          <div className='card-text'>
            <h3 className='titulo-card'>Sobre nós</h3>
            <span>Alegria em cada mordida!</span>

            <p>
              Venha comer o melhor doce da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e os melhores docinhos da cidade.
            </p>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  );
}
