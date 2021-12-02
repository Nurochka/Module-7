const BasePage = require("./base_page/base_page");
const HomePage = require("./home_page/home_page");
const AtHomePage= require("./at_home_page/at_home_page");
const NotAngularPage= require("./not_angular_page/not_angular_page"); 
const SearchResultPage = require("./search_result_page/search_result_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "At Home":
                return new AtHomePage();
            case "Regional Page":
                return new NotAngularPage();
            case "Search Result":
                return new SearchResultPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;