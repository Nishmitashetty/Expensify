import { Login,Logout } from '../../actions/auth';

test('should generate Login action object',() =>
{
    const action = Login('abc12345');
    expect(action).toEqual({
        type:'LOGIN',
        uid:'abc12345'
    })
});

test('should generate Logout action object',() =>
{
    const action = Logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});