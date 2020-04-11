import React from 'React';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render Expense list correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should give message for no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />) 
    expect(wrapper).toMatchSnapshot();
});