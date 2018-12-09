import React from 'react';
import RatingUser from './RatingUser';

const UserItem = () => (
  <div className="user-card col-md-3">
    <div className="image_outer_container">
      <div className="user-container">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="user" />
        <h3>Foulen ben Foulen</h3>
        <RatingUser rating={3} />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam accusamus dolor quaerat dignissimos similique sapiente.</p>
      </div>
    </div>
  </div>
);

export default UserItem;
