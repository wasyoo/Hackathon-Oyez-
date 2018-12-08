import React, { Component } from 'react';
import Register from '../Register/Register'

class ModalReg extends Component {
  state = {  }
  render() { 
    return (
    <div className="modal fade" id="register" tabindex="-1" role="dialog">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <Register/>
    </div>  );
  }
}
 
export default ModalReg;