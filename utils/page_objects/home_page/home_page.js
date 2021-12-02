const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Menu = require('../base_page/menu');

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.bosch.com/";
      this.CookieButton = new Element("CookieButton" , "className", "BoschPrivacySettingsV2__button BoschPrivacySettingsV2__button--primary");
           
    };
    
    open() {
      return super.open(this.url);
    };
};

module.exports = HomePage;