function Alert(props) {
  let alertClass;
  if (props.state == "error") {
    alertClass = "alert-danger";
  } else if (props.state == "success") {
    alertClass = "alert-success";
  }

  return (
    <div className={`alert ${alertClass}`} role="alert">
      {props.alertText}
    </div>
  );
}

export default Alert;
