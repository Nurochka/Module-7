const Element = require("../base_elements/base_element");

class NotAngularPage{
    constructor() {
      this.url = "https://www.bosch-home.by/";
      this.SearchField = new Element("SearchField", "className", 'm-forminput input normal js-search-input');
      this.SearchButton = new Element("SearchButton", "className", "icon icon-search icon-m");
    };

    open() {
      return super.open(this.url);
    };
};

module.exports = NotAngularPage;