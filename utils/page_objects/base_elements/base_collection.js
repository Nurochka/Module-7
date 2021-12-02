class Collection {
    constructor(elementName, selectorType, selector) {
        if (selectorType === 'className'){
            this.collection = element.all(by.className(selector));
        } else {
            this.collection = element.all(by.css(selector));}
        this.elementName = elementName;
    };

    async getCount() {
        const collectionCount = await this.collection.count();
        return collectionCount;
    };

    async getText() {
        const arrayOfCollectionTexts = await this.collection.getText();
        return arrayOfCollectionTexts;
    };

    async clickElementByText(textToClick) {
        return await this.collection.filter(function(elem){
            return elem.getText().then(function(text){
                return text === textToClick;
            });           
    }).first().click();          
    };
};

module.exports = Collection;