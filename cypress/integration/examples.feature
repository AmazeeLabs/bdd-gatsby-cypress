Feature: Example data
  A consistent set of example data that is available for all features.

  Scenario: Project A
    Given there is a project with name "A"
    And project "A" starts on "2020-03-13"
    And project "A" ends on "2020-03-20"

  Scenario: Project B
    And there is a project with name "B"
    And project "B" starts on "2020-02-13"
    And project "B" ends on "2020-03-10"

  Scenario: Project C
    And there is a project with name "C"
    And project "C" starts on "2020-04-01"
    And project "C" ends on "2020-04-02"
