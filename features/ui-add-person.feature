# Created by hans at 10.12.21
Feature: Add a person via the UI

  A Customer Service Representative (CSR)b
  can add a person with firstname, lastname and emailaddress
  The CSR will be provided containing a unique id

  Scenario: add a person to the known persons
    Given I am on the page where I can introduce a new person
    When I enter "Madeleine" in the firstname field
    And I enter "Peyroux" in the lastname field
    And I enter "madeleine@peyroux.com" in the email address field
    And I click the Add Person button
    Then I should see a message containing "Persoon gecreëerd met id"

