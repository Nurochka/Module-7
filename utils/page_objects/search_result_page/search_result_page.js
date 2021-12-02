const Collection = require("../base_elements/base_collection");
const NotAngularPage = require("../not_angular_page/not_angular_page.js");

class SearchResultPage extends NotAngularPage{
    constructor() {
      super();
      this.url = "https://www.bosch-home.by/poisk-rezultat?search=%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81";
      this.SearchResults = new Collection("SearchResult", "className", 'm-productteaser js-product-teaser');

    };

    open() {
    return super.open(this.url);
    };
};

module.exports = SearchResultPage;