Feature: Project Overview
  A manager can retrieve a list of all projects with their start and end date.

  Scenario: List all current or future projects
    Given there is a project with name "A"
    And project "A" starts on "2020-03-13"
    And project "A" ends on "2020-03-20"
    And there is a project with name "B"
    And project "B" starts on "2020-02-13"
    And project "B" ends on "2020-03-10"
    And there is a project with name "C"
    And project "C" starts on "2020-04-01"
    And project "C" ends on "2020-04-02"
    When the user opens the "/projects" page
    Then the user should see a list containing project "A"
    And the user should see a list containing project "C"
    But the user should not see a list containing project "B"

  Scenario: Navigate to project details
    Given there is a project with name "X"
    And project "X" starts on "2020-03-13"
    And project "X" ends on "2020-03-20"
    When the user clicks the title of project "X"
    Then the user see the detail page of project "X"
