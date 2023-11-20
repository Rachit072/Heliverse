import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => (
  <div className="user-list grid grid-cols-3 gap-4">
    {users && users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UserList;
