const Menu = require('./menu');

class BasePage{
    constructor() {
        this.Menu = new Menu();
    };
    
    async wait(waitInMilliseconds) {
        await browser.sleep(waitInMilliseconds);
    };

    async getCurrenUrl() {
        const currentUrl = await browser.getCurrentUrl();        
        return currentUrl;
    };

    async getTitle() {
        const currentTitle = await browser.getTitle();        
        return currentTitle;
    };

    async open(url) {
       await browser.get(url);
    };
};

module.exports = BasePage;