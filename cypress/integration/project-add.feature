Feature: Project creation
  A new project can be added from the project overview. When omitting date values, automatic dates are chosen.

  Background:
    Given the user has requested the project overview
    Then the list of projects should not contain "My new project"

  Scenario: Create a project without specifying dates
    Given the user is on the project creation form
    When the user creates a new project with name "My new project"
    Then the list of projects should contain "My new project" starting today and running for two weeks

  Scenario: Create a project with specific dates
    Given the user is on the project creation form
    When the user creates a new project with name "My new project" starting next week and running for one week
    Then the list of projects should contain "My new project" starting next week and running for one week
