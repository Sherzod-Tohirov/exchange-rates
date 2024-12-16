import { Modal, Button } from "react-bootstrap";

export default function UpdateTransactionModal({
  data,
  show,
  onApply,
  onClose,
}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data ? "Tranzaksiyani tahrirlash" : "Tranzaksiya qo'shish"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Yopish
        </Button>

        <Button variant="primary btn-success" onClick={onApply}>
          Saqlash
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
