import moment from 'moment';

const filters = {
    text:'',
    sortBy:'date',
    StartDate:undefined,
    endDate:undefined
};

const altFilters = {
    text:'bills',
    sortBy:'amount',
    startDate:moment(0),
    endDate:moment(3,'days')
};

export {filters,altFilters};