import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "../../utils/constants";
import { useForm } from "react-hook-form";

export default function UpdateTransactionModal({
  data,
  show,
  onApply,
  onClose,
}) {
  useEffect(() => {
    setIsExpense(data ? data.type === "expense" : true);
  }, [data]);
  const { register, handleSubmit, reset, setValue } = useForm({
    values: {
      amount: data?.amount || "",
      type: data?.type || "expense",
      time: data?.time || "",
      category: data?.category || "",
      comment: data?.comment || "",
    },
  });
  const [isExpense, setIsExpense] = useState(true);

  return (
    <Modal show={show} onHide={() => onClose(reset)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data ? "Tranzaksiyani tahrirlash" : "Tranzaksiya qo'shish"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id={"mainForm"} onSubmit={handleSubmit(onApply)}>
          <fieldset>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Miqdorni kiriting (UZS)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Masalan (125000 so'm)"
                    {...register("amount")}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="type">
                  <Form.Label>Turini belgilang</Form.Label>
                  <Form.Select
                    name="type"
                    onChange={(e) => {
                      console.log("e", e.target.value);
                      setIsExpense(e.target.value === "expense");
                      setValue("category", "");
                      setValue("type", e.target.value);
                    }}>
                    <option value={"expense"}>Xarajat</option>
                    <option value={"income"}>Daromad</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="category">
                  <Form.Label>Kategoriya</Form.Label>
                  <Form.Select
                    name="category"
                    {...register("category")}
                    required>
                    {(isExpense ? EXPENSE_CATEGORIES : INCOME_CATEGORIES).map(
                      (category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      )
                    )}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="time">
                  <Form.Label>Vaqti</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="time"
                    {...register("time")}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="comment">
              <Form.Label>Izoh qoldirish</Form.Label>
              <Form.Control
                as={"textarea"}
                rows={3}
                name="comment"
                {...register("comment")}></Form.Control>
            </Form.Group>
          </fieldset>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => onClose(reset)}>
          Yopish
        </Button>

        <Button form="mainForm" type="submit" variant="primary btn-success">
          Saqlash
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
