import { useNavigate } from "react-router-dom";

function PriceRangeFilter(props) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.searchParams.delete("price");
    props.searchParams.set("price_min", props.priceMin);
    props.searchParams.set("price_max", props.priceMax);
    navigate(`?${props.searchParams.toString()}`);
  }

  return (
    <>
      Price Range Filter
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="form-control form-control-sm"
          type="number"
          placeholder="Minimum price"
          aria-label="Minimum price"
          value={props.priceMin}
          onChange={(e) => {
            props.setPriceMin(e.target.value);
          }}
        ></input>
        <input
          className="form-control form-control-sm"
          type="number"
          placeholder="Maximum price"
          aria-label="Maximum price"
          value={props.priceMax}
          onChange={(e) => {
            props.setPriceMax(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary">Apply</button>
      </form>
    </>
  );
}

export default PriceRangeFilter;
