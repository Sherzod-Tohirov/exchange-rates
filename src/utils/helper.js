export function findTransactionById(transactions, id) {
  return transactions.find((tr) => tr.id === id);
}

export function filterTransactionsWithId(transactions, id) {
  return transactions.filter((tr) => tr.id !== id);
}

export function updateTransaction(oldTransaction, newTransaction) {
  Object.keys(oldTransaction).forEach((trKey) => {
    if(trKey !== "id") oldTransaction[trKey] = newTransaction[trKey];
    
  });
  console.log("old", oldTransaction);
  console.log("new", newTransaction);
  return oldTransaction;
}
