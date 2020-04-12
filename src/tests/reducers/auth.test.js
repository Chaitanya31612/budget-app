import authReducer from '../../reducers/auth';

test('should setup login', () => {
    const uid = 'dfajkldf';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});


test('should setup logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});