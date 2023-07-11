import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TitleSearch(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.searchParams.set("title", title);
    navigate(`?${props.searchParams.toString()}`);
  }

  return (
    <>
      Title Search
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Search by title"
          aria-label="Search by title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary">Apply</button>
      </form>
    </>
  );
}

export default TitleSearch;
