import React from 'react';

const UserCard = ({ user,onAddToTeam}) => (
  <div className="user-card flex">
    <img width={40} src={user.avatar} alt={user.first_name} />
    <h2>{user.first_name}</h2>
    <p>Email: {user.email}</p>
    <h2>User List:</h2>
    <div key={index}>
     {user.name} - {user.domain} - {user.availability}
     <button onClick={() => onAddToTeam(user)}>Add to Team</button>
    </div>
  </div>
);

export default UserCard;
