class InventoryPage{
    async open(){
        await browser.url("https://www.saucedemo.com/inventory.html");
    }
}

export default new InventoryPage();
