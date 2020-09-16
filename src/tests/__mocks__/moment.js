const moment =require.requireActual('moment');

export default (timestamp = 0) =>
{
    return moment(timestamp);
};


//mocking the libraries means creating the fake version of module!