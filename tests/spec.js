const PageFactory = require("../utils/page_objects/pageFactory");
const Menu = require("../utils/page_objects/base_page/menu");
let EC = protractor.ExpectedConditions;

describe("Bosch site testing", function(){

    it('open bosch.com angular page', function(){
        PageFactory.getPage("Home").open();
        PageFactory.getPage("Home").CookieButton.click();
        expect(browser.getTitle()).toEqual("Invented for life | Bosch Global");
        browser.sleep(1000);
    });

    it('go to search "At home" products', function(){ 
        PageFactory.getPage("Home").Menu.menuButton.click();  
        browser.sleep(1000);      
        PageFactory.getPage("Home").Menu.productsButton.click();
        browser.sleep(1000);
        PageFactory.getPage("Home").Menu.atHomeLink.click();
        browser.sleep(1000);
        expect(browser.getTitle()).toEqual("At home | Bosch Global");
        //browser.sleep(1000);
    });

    it('go to not angular https://www.bosch-home.by/ page', function(){
        PageFactory.getPage("At Home").HomeAppliancesButton.click();  
        browser.sleep(1000);
        PageFactory.getPage("At Home").ContinentDropdown.click();
        browser.sleep(1000);
        PageFactory.getPage("At Home").selectContinent.clickElementByText("Europe");
        browser.sleep(2000);
        
        PageFactory.getPage("At Home").CountryDropdown.click();
        browser.sleep(2000);
        PageFactory.getPage("At Home").selectCountry.clickElementByText("Belarus");
        browser.sleep(5000);
        
        PageFactory.getPage("At Home").GoToHomeAppliancesButton.click();
        browser.sleep(5000);            
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('by'), 5000);
        browser.waitForAngularEnabled(false);
        expect(browser.getTitle()).toContain("Беларусь");
        browser.sleep(2000);                       
    }); 

    
    it('check there are 20 resutls on one page', function(){ 
        PageFactory.getPage("Regional Page").SearchField.search('пылесос');
        browser.sleep(1000);
        PageFactory.getPage("Regional Page").SearchButton.click();
        browser.sleep(1000);

        let result = PageFactory.getPage("Search Result").SearchResults.getCount();
        expect(result).toEqual(20);
        browser.sleep(3000);
    });
    
});