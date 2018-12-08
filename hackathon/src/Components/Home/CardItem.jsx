import React from 'react';

const CardItem = () => (
  <div className="col-md-3">
    <div className="card">
      <img className="card-user" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="user" />
      <img className="card-img-top" src="https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title border-bottom pb-3">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
        <strong>7 dt</strong>
        <a href="/test" className="float-right">
        Réserver
        </a>
      </div>
    </div>
  </div>
);

export default CardItem;
