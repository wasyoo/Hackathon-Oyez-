import React from 'react';

class UserRating extends React.Component {
  render() {
    return Array(Number(this.props.rating))
      .fill(<span className="stars stars-fill">★</span>)
      .concat(Array(5).fill(<span className="stars empty-stars">★</span>))
      .slice(0, 5);
  }
}

export default UserRating;
