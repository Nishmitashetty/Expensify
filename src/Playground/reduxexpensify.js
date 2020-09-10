import { createStore, combineReducers } from 'redux';


// Store creation




store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id,{ amount :5 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
 store.dispatch(setStartDate(125));
 store.dispatch(setEndDate(300));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

