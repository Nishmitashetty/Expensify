import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

test('should render LoginPage component correctly',() =>
{
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click',() =>
{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();

});

test('should call startLogin2 on button click',() =>
{
    const startLogin2 = jest.fn();
    const wrapper = shallow(<LoginPage startLogin2={startLogin2} />);
    wrapper.find('button').at(1).simulate('click');
    expect(startLogin2).toHaveBeenCalled();
});