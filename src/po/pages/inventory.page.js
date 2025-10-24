const headerContainerComponent = required('./../components/common/header-container.component');

class InventoryPage{

    constructor(){
        this.headerContainer = new this.headerContainerComponent();
    }

    async open(){
        await browser.url("https://www.saucedemo.com/inventory.html");
    }
}

module.exports = InventoryPagePage;
