const loginBoxComponent = required('./../components/login/login-box.component');

class LoginPage{

    constructor(){
        this.loginBox = new this.loginBoxComponent();
    }

    async open(){
        await browser.url("https://www.saucedemo.com/");
    }
}

module.exports = LoginPage;
