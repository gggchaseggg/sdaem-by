import React from "react";
import ReactPaginate from "react-paginate";

import style from "./Paginator.module.scss";

const Paginator = ({ className, pageCount, pageSwitcher }) => {
  const handlePageClick = (event) => {
    pageSwitcher(event.selected + 1);
  };
  return (
    <div className={className}>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={7}
        marginPagesDisplayed={1}
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        containerClassName={style.container}
        pageClassName={style.pageItem}
        activeClassName={style.activePage}
        breakClassName={style.break}
      />
    </div>
  );
};

export default Paginator;
