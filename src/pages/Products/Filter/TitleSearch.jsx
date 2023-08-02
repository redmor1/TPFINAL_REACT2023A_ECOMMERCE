import { useNavigate } from "react-router-dom";

function TitleSearch(props) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.searchParams.set("title", props.title);
    navigate(`?${props.searchParams.toString()}`);
  }

  return (
    <div className="mb-4">
      <p className="filters-title fw-bold">Title Search</p>
      <form
        className="d-flex"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Search by title"
          aria-label="Search by title"
          value={props.title}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        ></input>
        <button type="submit" className="button-categories" aria-label="Apply">
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="rgba(0, 0, 0, 0.9)"
          >
            <path
              d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
              fill="rgba(0, 0, 0, 0.9)"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default TitleSearch;
