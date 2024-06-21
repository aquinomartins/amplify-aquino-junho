import React from 'react';
import './Products.css';
import crepesImage from '../assets/crepes.png'; // Imagem de crepes
import shakesImage from '../assets/shakes.png'; // Imagem de shakes

function Products() {
  return (
    <section id="produtos" className="products">
      <h2>Nossos Produtos</h2>
      <div className="product-list">
        <div className="product-item">
          <img src={crepesImage} alt="Crepes Crocantes" />
          <h3>Crepes Crocantes</h3>
          <p>Experimente nossos deliciosos crepes crocantes, feitos com ingredientes frescos e naturais.</p>
        </div>
        <div className="product-item">
          <img src={shakesImage} alt="Shakes de Açaí" />
          <h3>Shakes de Açaí</h3>
          <p>Refresque-se com nossos shakes de açaí, uma combinação perfeita de sabor e saúde.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
