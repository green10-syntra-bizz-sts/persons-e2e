# Created by hans at 10.12.21
Feature: Add a person via the UI - Business rules only

  A Customer Service Representative (CSR)
  can add a person with the necessary details
  The person will be created
  can be looked up
  and appears in lists

  Scenario: add a person to the known persons business rules only
    Given I am on the page where I can introduce a new person
    When I enter the necessary details for a person
    Then I should be able to look up and find that person
    And the data of that person should show up in the list

