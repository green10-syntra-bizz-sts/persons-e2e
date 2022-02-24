const { ListPersonsPage } = require('../pages/listPersonsPage.js');
const { AddPersonPage } = require('../pages/addPersonPage.js');
const { FindPersonByEMailPage } = require('../pages/findPersonByEMailPage.js')

const { I } = inject();

let listPersonsPage = new ListPersonsPage();
let addPersonPage = new AddPersonPage();
let findPersonByEMailPage = new FindPersonByEMailPage();

Given('I am on the page where I can introduce a new person', () => {
    addPersonPage.open();
});

When('I enter "{}" in the {} field', (the_text, the_field) => {
    addPersonPage.enterTextInField(the_field, the_text);
});

When('I click the Add Person button', () => {
    addPersonPage.clickTheButton('Add Person');
});

Then('I should see a message containing {string}', (message) => {
    addPersonPage.isInResultText(message);
});


Given('I am on the page where I can find a person', () => {
    findPersonByEMailPage.open();
});

When('I enter {string} in the {} field for searching', (the_text, the_field) => {
    findPersonByEMailPage.enterTextInField(the_field, the_text);
});

When('I click the Search Person button', () => {
    findPersonByEMailPage.clickTheButton('Search Person');
});

Then('I should see a message {string}', async (message) => {
    findPersonByEMailPage.isInResultText(message);
});

Then('I should see an alert {string}', (message) => {
    findPersonByEMailPage.hasPopup(message);
});

Given('I am on the page where I can list the known persons', () => {
    listPersonsPage.open();
});

When('I click on the List Persons button', () => {
    listPersonsPage.clickTheButton('List Persons');
});

Then('I should see a text containing {string} and {string} and {string}',
    (addr1, addr2, addr3) => {
    listPersonsPage.isInResultText(addr1);
    listPersonsPage.isInResultText(addr2);
    listPersonsPage.isInResultText(addr3);
});

When('I enter the necessary details for a person', () => {
    addPersonPage.enterTextInField('firstname', 'Stacey');
    addPersonPage.enterTextInField('lastname', 'Kent');
    addPersonPage.enterTextInField('email address', 'stacey@newjersey.com');
    addPersonPage.clickTheButton('Add Person');
    addPersonPage.isInResultText("Persoon gecreëerd met id");
});

Then('I should be able to look up and find that person', () => {
    findPersonByEMailPage.open();
    findPersonByEMailPage.enterTextInField('email address', 'stacey@newjersey.com');
    findPersonByEMailPage.clickTheButton('Search Person');
    findPersonByEMailPage.isInResultText("Gevonden: Stacey Kent, stacey@newjersey.com");
});

Then('the data of that person should show up in the list', () => {
    listPersonsPage.open();
    listPersonsPage.clickTheButton("List Persons");
    listPersonsPage.isInResultText("Stacey Kent -- stacey@newjersey.com");
});
