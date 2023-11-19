import React, { useState } from 'react'
import UserList from './UserList';
import Pagination from './pagination';

export default function Body() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery,setSearchQuery]=useState('');

    useEffect(() => {
        fetchData();
      }, [currentPage, searchQuery]);

    const fetchData = async () => {
        try {
          const response = await fetch('./src/assets/data.json');
          const data = await response.json();
          setUsers(data);
          setTotalPages(1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    function handlePageChange(page){
        setCurrentPage(page);    
    }

  return (
    <div>
       <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <UserList user={users}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
