import authReducer from '../../reducers/auth';

test('should set up default state',() =>
{
    const action = {
        type:'@@INIT'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({});
});

test('should set uid for Login',() =>
{
    const action = {
        type:'LOGIN',
        uid:'abcd1234'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({
        uid:'abcd1234'
    });
});

test('should clear uid for Logout',() =>
{
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer({uid:'abc123'},action);
    expect(state).toEqual({});
});