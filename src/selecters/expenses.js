////timestamps(milliseconds)
//11320,10,-100
//Jan 1st 1970(unix epoch)
//1000 should be the 1 second after Jan 1st 1970//

import moment from 'moment';

// Get visible expenses

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>
{
    return expenses.filter((expense) =>
    {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch  = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    //figure out if expense.description has text variable string inside of it

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) =>
    {
        if(sortBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1:-1;
        }
        else if(sortBy === 'amount')
        {
            return a.amount < b.amount ? 1:-1;
        }
    })
};

export default getVisibleExpenses;