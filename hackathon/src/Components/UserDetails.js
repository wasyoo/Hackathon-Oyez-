import React, { Component } from 'react';
import './UserDetails.css'
class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="UserDetails">
                <div className="info">
                <div className="name-user">
                <div class="label">Full Name : </div> <div class="details-labes">Foulen</div>
			<br/><div class="label">Mobile : </div>  <div class="details-labes">+216 ********</div>
			<br/><div class="label">Email : </div>  <div class="details-labes">Foulen@domain.com</div>
                <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_300x300.png" alt="imguser"  />
                
                </div>
                
                 </div>



            </div>


        );
    }
}

export default UserDetails;