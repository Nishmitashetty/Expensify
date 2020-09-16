import React from 'react';
import {shallow} from 'enzyme';
import DashboardExpensePage from '../../components/DashboardExpensePage';


test('should render Dashboard Expense Page correctly',() =>
{
    const wrapper = shallow(<DashboardExpensePage />);
    expect(wrapper).toMatchSnapshot();
});
