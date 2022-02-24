const { BasePage } = require("./basePage.js");

const {I} = inject();

class AddPersonPage extends BasePage {

    constructor() {
        super();
        this.elements['firstname'] = '#voornaam'
        this.elements['lastname'] = '#familienaam'
        this.elements['email address'] = '#emailadres'
        this.elements['Add Person'] = '#add-person'
        this.elements['result'] = '#resultaat_toevoeging'
    }

}

module.exports = {AddPersonPage}

