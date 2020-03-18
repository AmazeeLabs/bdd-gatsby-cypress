const moment = require('moment');

const projects = [
  {
    id: 1,
    name: 'Christmas micro-site',
    startDate: moment().subtract(1, 'year').month('Nov').startOf('month').format(),
    endDate: moment().subtract(1, 'year').month('Dec').startOf('month').format(),
  },
  {
    id: 2,
    name: 'Resource manager',
    startDate: moment().subtract(1, 'week').startOf('week').format(),
    endDate: moment().startOf('week').add(2, 'week').format(),
  },
  {
    id: 3,
    name: 'Fitness planner',
    startDate: moment().add(1, 'month').day(0).format(),
    endDate: moment().add(3, 'month').day(0).subtract(1, 'day').format(),
  },
];

module.exports = {projects};
