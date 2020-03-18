Feature: Project Overview
  A manager can retrieve a list of all projects with their start and end date.
  Background:
    Given all example projects are loaded into the system

  Scenario: List all current or future projects
    Given the user has requested the project overview
    Then the user should see a list containing project "A"
    And the user should see a list containing project "C"
    But the user should not see a list containing project "B"

  Scenario: Navigate to project details
    Given the user has requested the project overview
    When the user clicks the title of project "A"
    Then the user should see the headline "Assign to Project A"
