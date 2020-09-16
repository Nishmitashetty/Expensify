import getVisibleExpenses from '../../selecters/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

const filters = {
    text:'o',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined    
};

test('should filter expenses by text value', () =>
{
    const result = getVisibleExpenses(expenses,filters);

    expect(result).toEqual([ expenses[2],expenses[1] ]);
});

test('should filter expenses by startDate', () =>
{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };

    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('should filter expenses by endDate',() =>
{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(31,'days')
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
});

test('should filter expenses by sortByDate',() =>
{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should filter expenses by sortByAmount',() =>
{
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);

});