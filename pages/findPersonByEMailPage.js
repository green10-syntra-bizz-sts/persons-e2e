const { BasePage } = require("./basePage.js");

const {I} = inject();

class FindPersonByEMailPage extends BasePage {

    constructor() {
        super();
        this.elements['email address'] = '#emailadres'
        this.elements['Search Person'] = '#search-person'
        this.elements['result'] = {css: 'h3'};
    }

    hasPopup(popupText) {
        I.seeInPopup(popupText);
    }
}

module.exports = {FindPersonByEMailPage}

