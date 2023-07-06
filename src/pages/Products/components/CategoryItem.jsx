function CategoryItem(props) {
  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        // TODO: Add a callback function that does something
        onChange={() => {}}
        id={props.id}
      />
      <label className="form-check-label stretched-link" htmlFor={props.id}>
        {props.name}
      </label>
    </li>
  );
}

export default CategoryItem;
