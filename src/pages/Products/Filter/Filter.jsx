import { useLocation } from "react-router-dom";
import CategoryList from "./CategoryList";
import TitleSearch from "./TitleSearch";
import PriceFilter from "./PriceFilter";
import PriceRangeFilter from "./PriceRangeFilter";

function Filter() {
  // Conseguir la URL
  const location = useLocation();
  // Dividir la URL en params
  const searchParams = new URLSearchParams(location.search);

  return (
    <div className="sidebar col-2">
      <div className="d-flex align-items-center mb-4">
        <h4 className="fw-semibold filter-title me-3 mb-0 lh-1">Filter</h4>
        <p className="filter-clear text-decoration-underline mb-0 lh-1">
          Clear filters
        </p>
      </div>
      <CategoryList searchParams={searchParams} />
      <TitleSearch searchParams={searchParams} />
      <PriceFilter searchParams={searchParams} />
      <PriceRangeFilter searchParams={searchParams} />
    </div>
  );
}

export default Filter;
