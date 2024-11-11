import React from "react";
import ReactPaginate from "react-paginate";

import style from "./Paginator.module.scss";

type PaginatorProps = {
  className?: string;
  pageCount: number;
  pageSwitcher: Function;
};

const Paginator: React.FC<PaginatorProps> = ({
  className = "",
  pageCount,
  pageSwitcher,
}) => {
  const handlePageClick = (event: { selected: number }) => {
    console.log(event);
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
