import CategoryList from "./CategoryList";

function Filter() {
  return (
    <div className="sidebar col-2">
      <div className="d-flex align-items-center mb-4">
        <h4 className="fw-semibold filter-title me-3 mb-0 lh-1">Filter</h4>
        <p className="filter-clear text-decoration-underline mb-0 lh-1">
          Clear filters
        </p>
      </div>
      <CategoryList />
    </div>
  );
}

export default Filter;
