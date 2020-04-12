import { login, logout } from '../../actions/auth';

test('should setup login', () => {
    const uid = 'asjdflk'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should setup login', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})