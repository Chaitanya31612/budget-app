import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render Expense dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});