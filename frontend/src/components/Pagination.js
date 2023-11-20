import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button key={index} onClick={() => onPageChange(index + 1)}>{index + 1}</button>
    ))}
  </div>
);

export default Pagination;
