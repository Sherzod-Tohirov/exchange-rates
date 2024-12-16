import { useCallback, useState } from "react";
import { Stack, Table, Button } from "react-bootstrap";
import UpdateTransactionModal from "../components/modal/UpdateTransactionModal";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import "@assets/css/transactions.css";
import { findTransactionById, updateTransaction } from "../utils/helper";
export default function Transactions() {
  const [showModal, setShowModal] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const { value: transactions, setValue } = useLocalStorage("transactions");
  const handleTransactionUpdate = useCallback(
    (values) => {
      if (currentTransaction) {
        const foundTransaction = findTransactionById(
          transactions,
          currentTransaction.id
        );
        console.log(foundTransaction);
        console.log("tr", transactions);
        if (foundTransaction) {
          updateTransaction(foundTransaction, values);
          setValue("transactions", [...transactions]);
        }
      } else {
        setValue("transactions", [
          ...transactions,
          {
            id: uuidv4(),
            ...values,
          },
        ]);
      }

      setShowModal(false);
    },
    [currentTransaction, transactions, setValue]
  );
  const handleModalClose = useCallback((reset) => {
    setShowModal(false);
    reset();
  }, []);
  const handleTransactionDelete = useCallback(
    (id) => {
      const filteredTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
      setValue("transactions", [...filteredTransactions]);
    },
    [setValue, transactions]
  );
  return (
    <div className="page-wrapper">
      <Stack>
        <h2 className="title">Tranzaksiyalar</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Turi</th>
              <th>Miqdor</th>
              <th>Kategoriya</th>
              <th>Sana</th>
              <th>Izoh</th>
              <th>Boshqarish</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={
                    transaction.type === "income"
                      ? "income-transaction"
                      : "expense-transaction"
                  }>
                  <td>{index + 1}</td>
                  <td>
                    {transaction.type === "expense" ? "Xarajat" : "Daromad"}
                  </td>
                  <td>
                    {transaction.type === "expense" ? "-" : "+"}
                    {transaction.amount} UZS
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.comment}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="control-btn edit"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentTransaction(transaction);
                      }}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="control-btn delete"
                      onClick={() => handleTransactionDelete(transaction.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="no-data">
                  Tranzaksiyalar mavjud emas !
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button
          className="ms-auto btn-success"
          onClick={() => {
            setCurrentTransaction(null);
            setShowModal(true);
          }}>
          Tranzaksiya qo&#39;shish
        </Button>
      </Stack>
      <UpdateTransactionModal
        data={currentTransaction}
        show={showModal}
        onClose={handleModalClose}
        onApply={handleTransactionUpdate}
      />
    </div>
  );
}
