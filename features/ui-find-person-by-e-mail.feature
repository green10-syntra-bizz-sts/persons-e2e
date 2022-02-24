# Created by hans at 10.12.21
Feature: Find a person by their e-mail address via the UI

  A Customer Service Representatieve (CSR)
  can find a person by their e-mail address

  Background:
#    Given there are 3 known persons
#      | voornaam            | familienaam         | emailadres          |
#      | Hans                | Vandenbogaerde      | hans.vdb@gmail.com  |
#      | Nina                | Simone              | nina@baltimore.com  |
#      | Deedee              | Bridgewater         | deedee@paris.fr     |
    Given  I am on the page where I can find a person

  Scenario: Find an existing person by their e-mail-address
    When I enter "deedee@paris.fr" in the email address field for searching
    And I click the Search Person button
    Then I should see a message "Gevonden: Deedee Bridgewater, deedee@paris.fr"

  Scenario: Do not find a non-existing person by a fake e-mail-address
    When I enter "laurie@anderson.com" in the email address field for searching
    And I click the Search Person button
    Then I should see an alert "Server returned 404"
