class headerContainerComponent {
     get rootElement(){
        return $('.header_container');
        // alternative //*[@id="header_container"]
     }

    get headerLabel(){
        return this.rootElement.$('//*[@id="header_container"]/div[1]/div[2]/div');
        // alternative '.app_logo'
    }
}

module.exports = headerContainerComponent;