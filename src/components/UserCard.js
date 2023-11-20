import React from 'react';

const UserCard = ({ user }) => (
  <div className="user-card grid">
    <img src={user.avatar} alt={user.first_name} />
    <h2>{user.first_name}</h2>
    <p>Email: {user.email}</p>
  </div>
);

export default UserCard;
