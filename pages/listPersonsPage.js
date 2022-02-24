const { BasePage } = require("./basePage.js");

const {I} = inject();

class ListPersonsPage extends BasePage {

    constructor() {
        super();
        this.elements['List Persons'] = '#get-persons';
        this.elements['result'] = '#bekende_personen';
    }
}

module.exports = {ListPersonsPage}

