
const reducer = (accumulator,currentvalue) =>
{
    return accumulator + currentvalue;
};

//getExpensesTotal

 const getExpensesTotal = (expenses) =>
{
    return  expenses
    .map((expense) => expense.amount)
    .reduce(reducer,0);
};

export default getExpensesTotal;