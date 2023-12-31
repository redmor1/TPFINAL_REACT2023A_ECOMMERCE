function Modal(props) {
  return (
    <>
      <div className="modal-backdrop show"></div>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete item</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  props.setShowModal(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you wish to proceed?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  props.setShowModal(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  props.deleteItem.mutate(props.id);
                  props.setShowModal(false);
                }}
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
