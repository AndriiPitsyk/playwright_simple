const BasePage = require('../base.page');

class Home extends BasePage {
    constructor(page) {
        super(page);
        this.topBarHomeLink = '.navbar-nav a[href^="/"]';
        this.topBarProfileLink = '.navbar-nav a[href^="/@"]';
    }

    async ifProfileLinkDisplayed() {
        return this.isElementDisplayed(this.topBarProfileLink);
    }

    async getProfileName() {
        return this.getElementInnerText(this.topBarProfileLink);
    }
}

module.exports = Home;
