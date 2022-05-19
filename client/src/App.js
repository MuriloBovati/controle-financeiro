import './App.css';
import Header from './Components/header/Header';
import Resumo from './Components/Resumo/Resumo';
import Form from './Components/Form';
import { useState, useEffect } from 'react';

function App() {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const amountExpense = transactionsList
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount))

    const amountIncome = transactionsList
    .filter((item) => !item.expense)
    .map((transaction) => Number(transaction.amount))

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = (income - expense).toFixed(2)

    setIncome(`R$ ${income}`)

    setExpense(`R$ ${expense}`)

    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`)

  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }
  return (
    <div className="App">
      <Header/>
      <Resumo income={income} expense={expense} total={total}/>
      <Form 
        handleAdd={handleAdd} 
        transactionList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </div>
  );
}

export default App;
