
class BasePage {
    constructor(page) {
        this.page = page;
    }

   async clickOnElement(element) {
        await this.page.click(element);
   }

   async typeText(element, text) {
       await this.page.fill(element, text);
   }

   async navigateTo(url = '') {
        await this.page.goto(url);
   }

   async isElementDisplayed(element){
        return  this.page.isVisible(element);
   }

   async getElementInnerText(element) {
       return  this.page.innerText(element);
   }
}

module.exports = BasePage;
