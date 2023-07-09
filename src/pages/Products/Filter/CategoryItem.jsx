function CategoryItem(props) {
  return (
    <li className="list-group-item align-items-center mb-1">
      <input
        className="form-check-input me-1 me-2 rounded-0 border-black h5"
        type="checkbox"
        value={props.id}
        checked={props.id == props.categoryChecked}
        onChange={(e) => {
          props.handleCategoryChecked(e);
        }}
        id={props.id}
      />
      <label
        className="form-check-label stretched-link fw-normal"
        htmlFor={props.id}
      >
        {props.name}
      </label>
    </li>
  );
}

export default CategoryItem;
