import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id: 'e1', date: new Date (2022, 5, 29), title:'Car Insurance', amount: 294.69},
    {id: 'e2', date: new Date (2022, 4, 1), title:'New Desk', amount: 29.90},
    {id: 'e3', date: new Date (2022, 11, 2), title:'Toilet Paper', amount: 21.16},
    {id: 'e4', date: new Date (2022, 2, 20), title:'House Rent', amount: 1294.19},
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      {/* <h1 className="text-center">React Practice</h1> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
