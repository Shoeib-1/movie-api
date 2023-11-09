import React from "react";
import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css';
const PaginationComponent = ({getPage }) => {
    const handlePageClick=(data)=>{
      getPage(data.selected+1);
    }
     // page_count in api = 40000 movies
  const pageCount = 500
  return (
     <ReactPaginate
     previousLabel={'Previous'}
     nextLabel={'Next'}
     breakLabel={'..'}
     pageCount={pageCount}
     marginPagesDisplayed={7}
     pageRangeDisplayed={7}
     onPageChange={handlePageClick}
     containerClassName={'pagination justify-content-center p-2'}
     pageClassName={"page-item"}
     pageLinkClassName={"page-link"}
     previousClassName={"page-item"}
     previousLinkClassName={"page-link"}
     nextClassName={"page-item"}
     nextLinkClassName={"page-link"}
     breakClassName={"page-item"}
     breakLinkClassName={"page-link"}
     subContainerClassName={'pages pagination'}
     activeClassName={'active'}
      />
  );
};

export default PaginationComponent;
