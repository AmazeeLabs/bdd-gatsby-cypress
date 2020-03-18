Feature: Project Overview
  A manager can retrieve a list of all projects with their start and end date.
  Background:
    Given all example projects are loaded into the system

  Scenario: List all current or future projects
    Given the user has requested the project overview
    Then the list of projects should contain "Resource manager"
    And the list of projects should contain "Fitness planner"
    But the list of projects should not contain "Christmas micro-site"

  Scenario: Navigate to project details
    Given the user has requested the project overview
    When the user clicks the project "Resource manager"
    Then the user should see the headline "Resource manager"
