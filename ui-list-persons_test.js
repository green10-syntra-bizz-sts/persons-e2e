Feature('List all known persons via the UI');

Before(({I}) => {
    // It is assumed that the database contains data for Hans, Nina and Deedee, see API-tests
    I.amOnPage('http://localhost:5000/')
})

Scenario('List all known persons', ({I}) => {
    I.click('#get-persons');
    I.see('hans.vdb@gmail.com');
    I.see('nina@baltimore.com');
    I.see('deedee@paris.fr');
})
