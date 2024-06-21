import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner.png'; // Imagem de banner

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h2>Bem-vindo à Fast Nature</h2>
        <p>Deliciosos Crepes Crocantes e Shakes de Açaí</p>
        <a href="#produtos" className="cta-button">Conheça nossos produtos</a>
      </div>
    </section>
  );
}

export default Banner;
