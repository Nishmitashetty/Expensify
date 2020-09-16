import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render Expenses Summary component correctly with 1 expense',() =>
{
    const result = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000000} hiddenExpensesCount={0} />);
    expect(result).toMatchSnapshot();
});

test('should render Expenses Summary component correctly with multiple expenses',() =>
{
    const result = shallow(<ExpensesSummary expensesCount={5} expensesTotal={23445000} hiddenExpenses={2} />);
    expect(result).toMatchSnapshot();
});