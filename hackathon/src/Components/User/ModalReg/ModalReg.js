import React from 'react';
import Register from '../Register/Register';

const ModalReg = () => (
  <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Inscrition</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Register />
        </div>
      </div>
    </div>
  </div>
);

export default ModalReg;
