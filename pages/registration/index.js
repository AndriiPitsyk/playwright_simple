const BasePage = require('../base.page');

class Registration extends BasePage {
    constructor(page) {
        super(page);
        this.username = '[placeholder="Username"]';
        this.email = '[placeholder="Email"]';
        this.password = '[placeholder="Password"]';
        this.signUpButton = '.btn';
    }

    async open(url){
        await this.navigateTo(url);
    }

    async userRegistration(userName, email, password) {
        await this.typeText(this.username, userName);
        await this.typeText(this.email, email);
        await this.typeText(this.password, password);
        await this.clickOnElement(this.signUpButton);
        await this.page.waitForTimeout(2000);
    }
}

module.exports = Registration;
