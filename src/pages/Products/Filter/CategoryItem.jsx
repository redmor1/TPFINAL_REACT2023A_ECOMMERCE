function CategoryItem(props) {
  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="radio"
        value={props.id}
        checked={props.id == props.categoryChecked}
        onChange={(e) => {
          props.handleCategoryChecked(e);
        }}
        id={props.id}
      />
      <label className="form-check-label stretched-link" htmlFor={props.id}>
        {props.name}
      </label>
    </li>
  );
}

export default CategoryItem;
