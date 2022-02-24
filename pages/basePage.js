const {I} = inject();

/**
 * BasePage contains whatever is common in the PageObject classes
 * that extend from it
 */
class BasePage {

    constructor() {
        this.elements=[];
    }

    open() {
        I.amOnPage('http://localhost:5000/')
    }

    enterTextInField(the_field, the_text) {
        I.fillField(this.elements[the_field], the_text);
    }

    clickTheButton(the_button) {
        I.click(this.elements[the_button]);
    }

    isInResultText(the_text) {
        I.see(the_text, this.elements['result']);
    }
}

module.exports = {BasePage};