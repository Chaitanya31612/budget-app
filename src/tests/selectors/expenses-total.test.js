import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for no expense', () => {
    const res = selectExpensesTotal([]); 
    expect(res).toBe(0);
});

test('should return sum of single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(123);
});

test('should return sum of multiple expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(48001);
});