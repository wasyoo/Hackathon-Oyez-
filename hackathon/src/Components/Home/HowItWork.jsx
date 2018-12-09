import React from 'react';


const HowItWork = () => (
  <section className="how-section">
    <h1 className="title-section">Comment ça marche</h1>
    <div className="row how-it-work">
      <div className="step">
        <img src="/img/Step1.png" alt="" />
        <h3>Partager</h3>
        <p>Publiez gratuitement votre plat en indiquant leurs disponibilités et leurs prix.</p>
      </div>
      <i className="fas fa-hand-point-right" />
      <div className="step">
        <img src="/img/Step2.png" alt="" />
        <h3>Réserver et payez</h3>
        <p>les utilisateurs interesser par un plat peuvent réserver et payer.</p>
      </div>
      <i className="fas fa-hand-point-right" />
      <div className="step">
        <img src="/img/Step3.png" alt="" />
        <h3>Échangez, Mangez et Notez</h3>
        <p>Dégustez votre repas où vous voulez, quand bon vous semble et laissez votre avis</p>
      </div>
    </div>

  </section>
);

export default HowItWork;
