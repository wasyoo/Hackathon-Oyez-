import React from 'react';
import UserItem from './UserItem';


const TopUser = () => (
  <section>
    <h1 className="title-section">Top utilisateurs</h1>
    <div className="user-list row">
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  </section>
);

export default TopUser;
