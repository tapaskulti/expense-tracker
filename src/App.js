import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Expense_List = [
  {id: 'e1', date: new Date (2022, 5, 29), title:'Car Insurance', amount: 294.69},
  {id: 'e2', date: new Date (2022, 4, 1), title:'New Desk', amount: 29.90},
  {id: 'e3', date: new Date (2020, 11, 2), title:'Toilet Paper', amount: 21.16},
  {id: 'e4', date: new Date (2021, 2, 20), title:'House Rent', amount: 1294.19},
];

const App = () => {
  const [expenses, setExpenses] = useState(Expense_List);
  
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
