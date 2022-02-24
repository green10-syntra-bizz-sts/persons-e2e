Feature('Add a person via the UI');

Before(({I}) => {
    // It is assumed that the database contains data for Hans, Nina and Deedee, see API-tests
    I.amOnPage('http://localhost:5000/')
})

Scenario('Add a person to the known persons', ({I}) => {
    I.fillField('#voornaam',"Arno");
    I.fillField('#familienaam',"Hintjens");
    I.fillField('#emailadres',"arno@hintjens.be");
    I.click('#add-person');
    I.see('Persoon gecreëerd met id');
})
