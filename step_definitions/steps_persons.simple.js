const { I } = inject();
// Add in your custom step files

Given('I am on the page where I can introduce a new person', () => {
    I.amOnPage('http://localhost:5000/');
});

When('I enter "{}" in the firstname field', (the_text) => {
    I.fillField("voornaam",the_text);
});

When('I enter "{}" in the lastname field', (the_text) => {
    I.fillField("familienaam",the_text);
});

When('I enter "{}" in the email address field', (the_text) => {
    I.fillField("emailadres",the_text);
});

When('I click the Add Person button', () => {
    I.click("#add-person");
});

Then('I should see a message containing {string}', (message) => {
    I.see(message);
});


Given('I am on the page where I can find a person', () => {
    I.amOnPage('http://localhost:5000/');
});

When('I enter {string} in the email address field for searching', (the_text) => {
    I.fillField("emailadres",the_text);
});

When('I click the Search Person button', () => {
    I.click("#search-person");
});

Then('I should see a message {string}', async (message) => {
    I.see( message, {css:'h3'});
});

Then('I should see an alert {string}', (message) => {
    I.seeInPopup(message);
    I.acceptPopup();
});

When('I am on the page where I can list the known persons', () => {
    I.amOnPage('http://localhost:5000/');
});

When('I click on the List Persons button', () => {
    I.click("#get-persons");
});

Then('I should see a text containing {string} and {string} and {string}', (addr1, addr2, addr3) => {
    I.see(addr1, '#bekende_personen')
    I.see(addr2, '#bekende_personen')
    I.see(addr3, '#bekende_personen')
});
