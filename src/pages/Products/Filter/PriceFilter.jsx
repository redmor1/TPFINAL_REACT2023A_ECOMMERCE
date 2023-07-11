import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PriceFilter(props) {
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.searchParams.delete("price_min");
    props.searchParams.delete("price_max");
    props.searchParams.set("price", price);
    navigate(`?${props.searchParams.toString()}`);
  }

  return (
    <>
      Price Filter
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="form-control form-control-sm"
          type="number"
          placeholder="Search by price"
          aria-label="Search by price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary">Apply</button>
      </form>
    </>
  );
}

export default PriceFilter;
