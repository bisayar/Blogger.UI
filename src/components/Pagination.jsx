import { useState , useEffect } from "react"
import ReactPaginate from "react-paginate";

import Icon from "../font-icon/Icon"


function Pagination({currentItems , setCurrentItems , posts , itemsPerPage}) {

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(posts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage , currentItems]);
  
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % posts.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
      {/* <Icon color="#444" size={20} icon="keyboard_arrow_left" /> */}
      {/* <Icon color="#444" size={20} icon="keyboard_arrow_right" /> */}
        <div className="AZ-pagination d-flex align-items-center gap-2 justify-content-center">
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-link"
                pageLinkClassName="page-link"
                previousClassName="page-nav"
                previousLinkClassName="page-link"
                nextClassName="page-nav"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
      </>
    );
}

export default Pagination
