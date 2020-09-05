import React from 'react';
import ReactPaginate from 'react-paginate';
import T from 'prop-types';

const Pagination = ({ initialPage, forcePage, count, onClick }) => (
  <ReactPaginate
    initialPage={!initialPage ? 0 : initialPage - 1}
    forcePage={forcePage - 1}
    previousLabel="▶"
    nextLabel="▶"
    previousClassName="pagination__item pagination__item--previous"
    nextClassName="pagination__item pagination__item--next"
    breakLabel="..."
    breakClassName="pagination__item pagination__item--break"
    pageCount={count}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    onPageChange={onClick}
    containerClassName="pagination"
    pageClassName="pagination__item"
    subContainerClassName="pages pagination"
    activeClassName="active"
  />
);

Pagination.defaultProps = {
  initialPage: 0,
  forcePage: 0,
};

Pagination.propTypes = {
  initialPage: T.number,
  forcePage: T.number,
  count: T.number.isRequired,
  onClick: T.func.isRequired,
};

export default Pagination;
