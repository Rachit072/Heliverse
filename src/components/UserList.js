import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users,onAddToTeam}) => (
  <div className="user-list grid">
    {users && users.map(user => (
      <div className="user-card flex">
      <img width={40} src={user.avatar} alt={user.first_name} />
      <h2>{user.first_name}</h2>
      <div>Email: {user.email}</div>
      <div>{user.domain}</div>
      <div>
       Available-{(user.available)?<span>Yes</span>:<span>No</span>}
      </div>
      <button onClick={() => onAddToTeam(user)}>Add to Team</button>
    </div>
    ))}
  </div>
);

export default UserList;
