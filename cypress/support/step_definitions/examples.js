const moment = require('moment');
const { Given } = require('cypress-cucumber-preprocessor/steps');
const { projects } = require('../../fixtures/examples');

Given(/^there is a project with name "([^"]*)" that started last week and will finish in two weeks$/, function(name) {
  const project = projects.filter(project => project.name === name).shift();
  expect(project).not.to.be.empty;
  expect(moment(project.startDate).week()).to.equal(moment().subtract(1, 'week').week());
  expect(moment(project.endDate).week()).to.equal(moment().add(2, 'week').week());
});

Given(/^there is a project with name "([^"]*)" that started november of last year and was finished in december$/, function(name) {
  const project = projects.filter(project => project.name === name).shift();
  expect(project).not.to.be.empty;
  expect(moment(project.startDate).year()).to.equal(moment().subtract(1, 'year').year());
  expect(moment(project.startDate).format('MMM')).to.equal('Nov');
  expect(moment(project.endDate).year()).to.equal(moment().subtract(1, 'year').year());
  expect(moment(project.endDate).format('MMM')).to.equal('Dec');
});

Given(/^there is a project with name "([^"]*)" that will start next month and will take two months$/, function(name) {
  const project = projects.filter(project => project.name === name).shift();
  expect(project).not.to.be.empty;
  expect(moment(project.startDate).year()).to.equal(moment().year());
  expect(moment(project.startDate).format('MMM')).to.equal(moment().add(1, 'month').format('MMM'));
  expect(moment(project.endDate).year()).to.equal(moment().year());
  expect(moment(project.endDate).format('MMM')).to.equal(moment().add(3, 'month').format('MMM'));
});
