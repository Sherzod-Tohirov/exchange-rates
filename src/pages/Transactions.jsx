import { useState } from "react";
import { Stack, Table, Button } from "react-bootstrap";
import UpdateTransactionModal from "../components/modal/UpdateTransactionModal";

export default function Transactions() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="page-wrapper">
      <Stack>
        <h2 className="title">Tranzaksiyalar</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Miqdor</th>
              <th>Kategoriya</th>
              <th>Sana</th>
              <th>Izoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <Button
          className="ms-auto btn-success"
          onClick={() => setShowModal(true)}>
          Yangi tranzaksiya qo&#39;shish
        </Button>
      </Stack>
      <UpdateTransactionModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
