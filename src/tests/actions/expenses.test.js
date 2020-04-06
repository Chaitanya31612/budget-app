import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    })
});

test('Should setup edit expense', () => {
    const action = editExpense("123", { note: 'A new note' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: { note: 'A new note' }
    })
});

test('Should setup add expense with provided data', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123,
        createdAt: 1000,
        note: 'last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense with defaults', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ""
        }
    })
})