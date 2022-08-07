import React from "react";
import ReactPaginate from "react-paginate";

import style from "./NewsPaginator.module.scss";

const NewsPaginator = (props) => {
  const handlePageClick = (event) => {
    props.pageSwitcher(event.selected + 1);
  };
  return (
    <div className={props.className}>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={props.pageCount}
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

export default NewsPaginator;
