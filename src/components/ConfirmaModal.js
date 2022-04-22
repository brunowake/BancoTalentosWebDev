import Modal from "react-bootstrap/Modal";

function ConfirmaModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      fullscreen={props.fullscreen || false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.handleClose ? (
          <button className="btn btn-secondary" onClick={props.handleClose}>
            Cancelar
          </button>
        ) : (
          ""
        )}

        {props.confirmationText ? (
          <button
            className={`btn btn-${props.variant}`}
            onClick={props.handleConfirmation}
          >
            {props.confirmationText}
          </button>
        ) : (
          ""
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmaModal;
