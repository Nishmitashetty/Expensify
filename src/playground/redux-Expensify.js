import {createStore,combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';

//ADD_EXPENSE

const addExpense = (
        {
        description='',
        note='',
        amount=0,
        createdAt=0
        } = {}
    ) => ({
    type:'ADD_EXPENSE',
    expense:
    {
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text='') => ({
type:'SET_TEXT_FILTER',
text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (date) => (
{
type:'SET_START_DATE',
date:date
});
//SET_END_DATE
const setEndDate = (date) => (
{
type:'SET_END_DATE',
date:date
});

//expenses Reducer
const expensesReducerDefaultState=[];

const expensesReducer = (state = expensesReducerDefaultState, action) =>
{
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id != action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) =>
            {
                if(expense.id === action.id)
                {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else
                {
                    return expense;
                }
            });

        default:
            {
                return state;
            }
    }
};

//filters Reducer
const filtersReducerDefaultState = 
{
text:'',
sortBy:'date',
startDate:undefined,
endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>
{
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return {
              ...state,
              text:action.text  
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.date
            };
        default:
            {
                return state
            }
    }
};

////timestamps(milliseconds)
//11320,10,-100
//Jan 1st 1970(unix epoch)
//1000 should be the 1 second after Jan 1st 1970//

// Get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>
{
    return expenses.filter((expense) =>
    {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch  = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    //figure out if expense.description has text variable string inside of it

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) =>
    {
        if(sortBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1:-1;
        }
        else if(sortBy === 'amount')
        {
            return a.amount < b.amount ? 1:-1;
        }
    })
};

//store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
    );

store.subscribe(() =>
{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:10000,createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:500,createdAt:2000}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:600}));

//  store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//store.dispatch(sortByAmount()); //Amount
 store.dispatch(sortByDate());   //Date

//store.dispatch(setStartDate(125)); //StartDate 125
// store.dispatch(setStartDate());    //StartDate undefined
//store.dispatch(setEndDate(1000)); //EndDate 1250

const demoState = {
    expenses:[{
        id:'kszbkdsjfb',
        description:'January Rent',
        note:'This is the final payment for that address!',
        amount:10000,
        createdAt:0
    }],
    filters:{
        text:'Rent',
        sortBy:'amount',    //Date or Amount
        startDate:undefined,
        endDate:undefined
    }
}
