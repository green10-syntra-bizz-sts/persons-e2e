# Created by hans at 10.12.21
Feature: List all known persons via the UI

  A Customer Service Representatieve (CSR)
  can list all known persons

  Scenario: List all known persons
#    Given there are 3 known persons
#      | voornaam            | familienaam         | emailadres          |
#      | Hans                | Vandenbogaerde      | hans.vdb@gmail.com  |
#      | Nina                | Simone              | nina@baltimore.com  |
#      | Deedee              | Bridgewater         | deedee@paris.fr     |
    Given I am on the page where I can list the known persons
    When I click on the List Persons button
    Then I should see a text containing "hans.vdb@gmail.com" and "nina@baltimore.com" and "deedee@paris.fr"

