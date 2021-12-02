const Menu = require('./menu');

class BasePage{
    constructor() {
        this.Menu = new Menu();
    };
    
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };

    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();        
        return currentUrl;
    };

    async getTitle() {
        const currentTitle = browser.getTitle();        
        return currentTitle;
    };

    open(url) {
       return browser.get(url);
    };
};

module.exports = BasePage;