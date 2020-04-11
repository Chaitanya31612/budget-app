import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({}); 
    const expenseData = {
        description: 'Mouse',
        amount: 3444,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense to database and store with default', (done) => {
    const store = createMockStore({}); 
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

// test('Should setup add expense with defaults', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ""
//         }
//     })
// })