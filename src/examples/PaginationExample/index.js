import { useEffect, useState } from 'react';
import { Pagination } from 'components';

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(30);

  return (
    <>
      
      <Pagination 
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={setCurrentPage}
      />
{/* 
      <Pagination 
        currentPage={3}
        totalCount={50}
      />
      <Pagination 
        currentPage={4}
        totalCount={50}
      />      

      <Pagination 
        currentPage={49}
        totalCount={50}
      />

      <Pagination 
        currentPage={15}
        totalCount={100}
      />

      <Pagination 
        currentPage={100}
        totalCount={100}
      />       */}
    </>
  )
}

export default PaginationExample;

