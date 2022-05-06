import ReactPaginate from "react-paginate";
import { AMOUNT_ITEM_TO_PAGE } from "../../../../../constants";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hook";
import { PageClickType } from "../../../../../interface/PageClickType";
import { getNewPage } from "../../../../../state/userSlice";
import "./style.css";

export const Paginate: React.FC = () => {
  const state = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { user, firstPageItem, finishPageItem, search } = state;
  const { public_repos } = user;
  const totalPage = Math.ceil(public_repos / AMOUNT_ITEM_TO_PAGE);

  const handlePageClick = (event: PageClickType) => {
    const newPage = ++event.selected;
    dispatch(getNewPage({ search, newPage, public_repos }));
  };

  return (
    <div className="container-paginate flex">
      <div className="pagitane-count">
        {firstPageItem}-{finishPageItem} of {public_repos} items
      </div>
      <div className="paginate-items">
        <ReactPaginate
          previousLabel={""}
          previousLinkClassName={"prev-button"}
          nextLabel={""}
          nextLinkClassName={"next-button"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageClassName={"paginate-item"}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex"}
          activeClassName={"active"}
          pageCount={totalPage}
        />
      </div>
    </div>
  );
};
