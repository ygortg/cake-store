import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.css';


export default function PaginaSabores() {
  return(
    <div>
      <Header />

      <main>
        
        <section className='banner sabor'>
          <div className='wrap texto-banner'>
            <h1>Nossos Sabores</h1>
          </div>
        </section>

        <section className='sabores'>
          <h3 className='titulo-card'>Sabores de Sorvetes</h3>
          
          <div className='galeria wrap'>
            
            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 1</h4>
              <p>Descrição do Produto</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 2</h4>
              <p>Descrição do Produto</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 3</h4>
              <p>Descrição do Produto</p>
            </div>
          
            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 4</h4>
              <p>Descrição do Produto</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 5</h4>
              <p>Descrição do Produto</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/doces.jpg' alt='imagem provisoria'/>
              <h4>Produto 6</h4>
              <p>Descrição do Produto.</p>
            </div>

          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}