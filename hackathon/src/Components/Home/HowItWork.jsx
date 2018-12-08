import React from 'react';


const HowItWork = () => (
  <section className="how-section">
    <h1>Comment ça marche</h1>
    <div className="row how-it-work">
      <div className="step">
        <img src="/img/Step1.png" alt="" />
        <h3>Partager</h3>
      </div>
      <i className="fas fa-hand-point-right" />
      <div className="step">
        <img src="/img/Step2.png" alt="" />
        <h3>Prendre</h3>
      </div>
      <i className="fas fa-hand-point-right" />
      <div className="step">
        <img src="/img/Step3.png" alt="" />
        <h3>Manger</h3>
      </div>
    </div>

  </section>
);

export default HowItWork;
