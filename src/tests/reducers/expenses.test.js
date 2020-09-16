import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set up default state',() =>
{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',() =>
{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);

});

test('should not remove expenses if id doesnt match',() =>
{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add expense',() =>
{
    const expense = {
        id:'04',
        description:'headset',
        amount:399,
        note:'',
        createdAt:moment(0).add(5,'days').valueOf()
    };
    const action = {
        type:'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit expense',() =>
{
  const updates = {
        description:'DELPHINI EAU DE TOILETTE',
        amount:1100,
        note:'costly and long--lasting perfume!'
    };
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state[0]).toEqual({
        id:'01',
        description:'DELPHINI EAU DE TOILETTE',
        amount:1100,
        createdAt:0,
        note:'costly and long--lasting perfume!'
    });
});

test('should not edit expense if expense not found',() =>
{
    const updates = {
        description:'DELPHINI EAU DE TOILETTE',
        amount:1100,
        note:'costly and long--lasting perfume!'
    };
    const action = {
        type:'EDIT_EXPENSE',
        id:'-01',
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses',() =>
{
    const action = {
        type:'SET_EXPENSES',
        expenses:[expenses[0]]
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0]]);
});