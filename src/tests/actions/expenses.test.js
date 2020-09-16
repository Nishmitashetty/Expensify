import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import { start } from 'live-server';

const createStore = configureMockStore([thunk]);

const uid = 'thisismytestid';
const defaultAuthState = {
    auth:{
        uid:uid
    }
};

//life-cycle-method
beforeEach(() =>
{
    const expensesData = {};
    expenses.forEach(({id,description,amount,note,createdAt}) =>
    {
        expensesData[id] = {description,amount,note,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData);
});

test('should setup remove expense action object',() =>
{
    const action = removeExpense({ id:'123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should remove an expense from firebase database',(done) =>
{
    const store = createStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({id})).then(() =>
    {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((dataSnapshot) =>
    {
        expect(dataSnapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expense action object', () => 
{
    const action = editExpense('1234abcd',{note:'editing an expense.'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1234abcd',
        updates:{
            note:'editing an expense.'
        }    
    });
});

test('should edit expense in firebase database',(done) =>
{
    const updates = {
        description:'glass',
        amount:10,
        note:'',
        createdAt:1234567890
    };
    const id = expenses[0].id;

    const store = createStore(defaultAuthState);
    store.dispatch(startEditExpense(id,updates)).then(() =>
    {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
        type:'EDIT_EXPENSE',
        id,
        updates
        });

    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((dataSnapshot) =>
    {
        expect(dataSnapshot.val()).toEqual(updates);
        done();
    });
});

test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
});   

test('should add expense to database and redux store',(done) =>
{
    const store = createStore(defaultAuthState);
    const expenseData = {
        description:'mouse',
        amount:420,
        note:'This is the best mouse',
        createdAt:1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() =>
    {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
               id:expect.any(String),
               ...expenseData
           }
       });

       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((dataSnapshot) =>
    {
         expect(dataSnapshot.val()).toEqual(expenseData);
         done();
    })
});

test('should add expense with defaults to database and store',() =>
{
    const store = createStore(defaultAuthState);
    
    store.dispatch(startAddExpense()).then(() =>
    {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
               id:expect.any(String),
               description:'',
               amount:0,
               note:'',
               createdAt:0
           }
       });

       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((dataSnapshot) =>
    {
         expect(dataSnapshot.val()).toEqual({
             description:'',
             amount:0,
             note:'',
             createdAt:0
         });
         done();
    })
});

test('should setup setExpenses action object',() =>
{
    const action = setExpenses([expenses[0]]);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses:[expenses[0]]
    });
});

test('should fetch from firebase database',(done) =>
{
    const store = createStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() =>
    {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
    done();
    });
});