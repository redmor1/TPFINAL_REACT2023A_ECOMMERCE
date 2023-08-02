function CategoryItem(props) {
  return (
    <>
      <li className="list-group-item align-items-center mb-1">
        <button
          className={`button-categories ${
            props.id == props.categoryChecked ? "active fw-bold" : "fw-normal"
          } ps-0 mb-0 `}
          value={props.id}
          onClick={(e) => {
            props.handleCategoryChecked(e);
          }}
          id={props.id}
          aria-label={props.name}
          style={{ outline: "none" }}
        >
          {props.name}
        </button>
      </li>
    </>
  );
}

export default CategoryItem;
