const registration = require('../pages/registration');
const home = require('../pages/home');
const testUser = require('../data-builder').generateUserData();
const { chromium } = require('playwright');
const expect = require('chai').expect;
const TEST_URL = require('../config/test-config').TEST_URL;

let page, browser, registrationPage, homePage;

describe('User registration test', function () {
    before(async () => {
        browser = await chromium.launch({headless: false});
        page = await browser.newPage();
        registrationPage = new registration(page);
        homePage = new home(page);
        await registrationPage.open(TEST_URL);
    })

    it('Should successfully register new user', async function () {
        const { username, email, password } = testUser;
        await registrationPage.userRegistration( username, email, password);
        expect(await homePage.ifProfileLinkDisplayed(), 'Logo of the site is not visible').to.be.true;
        expect(await homePage.getProfileName()).to.be.equal(username);
    });

    after(async () => {
        await browser.close();
    })
});
