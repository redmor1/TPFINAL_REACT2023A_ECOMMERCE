import CategoryList from "./CategoryList";
import ColorList from "./ColorList";

function Filter() {
  return (
    <div className="sidebar col-3">
      <h1>Filter</h1>
      <CategoryList />
      <ColorList />
    </div>
  );
}

export default Filter;
