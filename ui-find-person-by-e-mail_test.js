Feature('Find person by e-mail');

Before(({I}) => {
    // It is assumed that the database contains data for Hans, Nina and Deedee, see API-tests
    I.amOnPage('http://localhost:5000/')
})

Scenario('Find an existing person by their e-mail-address', ({I}) => {
    I.fillField('#emailadres',"deedee@paris.fr");
    I.click('#search-person');
    I.see('Gevonden: Deedee Bridgewater, deedee@paris.fr');
})

Scenario('Do not find a non-existing person by a fake e-mail-address', ({I}) => {
    I.fillField('#emailadres',"marc.rutte@gmail.com");
    I.click('#search-person');
    I.seeInPopup('Server returned 404');
})