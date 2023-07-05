function Category(props) {
  return (
    <div className="card col-2 mx-3 mb-5">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Category;
