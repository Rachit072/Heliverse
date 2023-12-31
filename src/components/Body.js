import React, { useState,useEffect } from 'react'
import UserList from './UserList';
import Pagination from './pagination';
import userData from '../assets/data.json'
import Shimmer from './Shimmer'


const usersPerPage = 20;

export default function Body() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery,setSearchQuery]=useState('');
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);


  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

    const fetchData = debounce(() => {
      try {
        const filteredUsers = searchQuery
        ? userData.filter(user =>
          user.first_name && user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : userData;

      const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
      setTotalPages(totalPages);

      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const usersForCurrentPage = filteredUsers.slice(startIndex, endIndex);

    setUsers(usersForCurrentPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },300)

    useEffect(() => {
      fetchData();
    }, [currentPage, searchQuery]);

    function handlePageChange(page){
      setCurrentPage(page);    
  }
  
  const isUserSelectable = (user) => {
      return !selectedTeamMembers.some(
        (selectedUser) =>
          selectedUser.domain === user.domain || selectedUser.available === user.available
      );
  };

  const addToTeam = (user) => {
    if (isUserSelectable(user)) {
      setSelectedTeamMembers((prevTeamMembers) => [...prevTeamMembers, user]);
    } else {
      console.error('User cannot be added to the team');
    }
  };

  return (
    <div>
      <div className='search-bar'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div>
        <h2>Team Members:</h2>
        <ul>
          {selectedTeamMembers.map((member) => (
            <li key={member.id}>{member.first_name}</li>
          ))}
        </ul>
      </div>
      
      {users.length === 0 ? (<Shimmer/>
      ): (
      <UserList users={users} onAddToTeam={addToTeam} />)}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
