import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set array to default', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove an item', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an item with wrong id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'new',
            note: 'something',
            amount: 3423,
            createdAt: 1000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'Coffee shop'
        }
    };
    const state = expensesReducer(expenses, action);
    // expect(state).toEqual([{ ...expenses[0], ...action.updates }, expenses[1], expenses[2]]);
    expect(state[0].description).toBe('Coffee shop')
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            description: 'Coffee shop'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});