import getExpensesTotal from '../../selecters/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',() =>
{
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('shoud correctly addup a single expense',() =>
{
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(1000);
});

test('should correctly addup multiple expenses',() =>
{
    const result = getExpensesTotal(expenses);
    expect(result).toBe(1900);
});