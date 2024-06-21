import React from 'react';
import './Products.css';

function Products() {
  return (
    <section className="products">
      <div id="crepes" className="product-section">
        <h3>Crepes Crocantes</h3>
        <p>Experimente nossos deliciosos crepes crocantes, feitos com ingredientes frescos e naturais.</p>
      </div>
      <div id="shakes" className="product-section">
        <h3>Shakes de Açaí</h3>
        <p>Refresque-se com nossos shakes de açaí, uma combinação perfeita de sabor e saúde.</p>
      </div>
    </section>
  );
}

export default Products;