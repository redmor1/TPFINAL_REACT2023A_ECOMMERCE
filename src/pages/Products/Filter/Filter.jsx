import { useLocation, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import TitleSearch from "./TitleSearch";
import PriceFilter from "./PriceFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import { useState } from "react";

function Filter() {
  const navigate = useNavigate();

  // Conseguir la URL
  const location = useLocation();
  // Dividir la URL en params
  const searchParams = new URLSearchParams(location.search);

  // Lift state up from CategoryList component
  const categoryId = searchParams.get("categoryId");
  const [categoryChecked, setCategoryChecked] = useState(categoryId);

  // Lift state up from TitleSearch component
  const [title, setTitle] = useState("");

  // Lift state up from PriceFilter component
  const [price, setPrice] = useState("");

  // Lift state up from PriceRangeFilter component
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  function handleClearFilters() {
    searchParams.delete("categoryId");
    searchParams.delete("title");
    searchParams.delete("price_min");
    searchParams.delete("price_max");
    navigate(`?${searchParams.toString()}`);

    // Reset state
    setCategoryChecked(null);
    setPrice("");
    setTitle("");
    setPriceMin("");
    setPriceMax("");
  }

  return (
    <div className="sidebar col-xxl-2 col-lg-3 col-md-10 col-sm-10">
      <div className="d-flex align-items-center mb-4 justify-content-between">
        <h4 className="fw-semibold filter-title me-3 mb-0 lh-1">Filter</h4>
        <button
          onClick={handleClearFilters}
          className="filter-clear text-decoration-underline mb-0 lh-1"
        >
          Clear filters
        </button>
      </div>
      <CategoryList
        searchParams={searchParams}
        categoryChecked={categoryChecked}
        setCategoryChecked={setCategoryChecked}
      />
      <TitleSearch
        searchParams={searchParams}
        title={title}
        setTitle={setTitle}
      />
      <PriceFilter
        searchParams={searchParams}
        price={price}
        setPrice={setPrice}
      />
      <PriceRangeFilter
        searchParams={searchParams}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
    </div>
  );
}

export default Filter;
