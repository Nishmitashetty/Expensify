import moment from 'moment';

//fixtures = dummy/test data
const expenses = [{
    id:'01',
    description:'Delphini perfume',
    amount:1000,
    createdAt:0,
    note:''
},
{
    id:'02',
    description:'oil-free-facewash',
    amount:250,
    createdAt:moment(0).subtract(4,'days').valueOf(),
    note:''
},
{
    id:'03',
    description:'ortho--oil',
    amount:650,
    createdAt:moment(0).add(4,'days').valueOf(),
    note:''
}]; 
export default expenses;