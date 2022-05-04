import ReactPaginate from "react-paginate";
import "./style.css";

export const Paginate = () => {
  return (
    <div className="container-paginate flex">
      <div className="pagitane-count">5-8 of 249 items</div>
      <div className="paginate-items">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageClassName={"paginate-item"}
          //  pageCount={total}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          //  onPageChange={handlePageClick}
          containerClassName={"pagination flex"}
          activeClassName={"active"}
          pageCount={10}
        />
      </div>
    </div>
  );
};
