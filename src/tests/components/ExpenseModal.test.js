import React from 'react';
import { shallow } from 'enzyme';
import ExpenseModal from '../../components/ExpenseModal';

test('should render ExpenseModal component with default',() =>
{
    const onRemoveSpy = jest.fn();
    const handleClearSelectedExpense = jest.fn();

    const wrapper = shallow(
    <ExpenseModal
        selectedExpense={undefined}
        onRemove={onRemoveSpy}
        handleClearSelectedExpense={handleClearSelectedExpense}
    />);
    expect(wrapper).toMatchSnapshot();
});

let onRemove,handleClearSelectedExpense,wrapper;

beforeEach(() =>
{
    onRemove = jest.fn();
    handleClearSelectedExpense = jest.fn();

    wrapper = shallow(<ExpenseModal
        selectedExpense={'Rent'}
        onRemove={onRemove}
        handleClearSelectedExpense={handleClearSelectedExpense}
    />);
});

test('should render ExpenseModal component correctly',() =>
{
    expect(wrapper).toMatchSnapshot();
});

test('should handle cancel button',() =>
{
    wrapper.find('button').at(0).simulate('click');
    expect(handleClearSelectedExpense).toHaveBeenCalled();
});

test('should handle Delete button',() =>
{
    wrapper.find('button').at(1).simulate('click');
    expect(onRemove).toHaveBeenCalled();
});