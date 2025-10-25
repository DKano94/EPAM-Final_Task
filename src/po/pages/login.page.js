import loginBoxComponent from './../components/login/login-box.component.js';
    
    class LoginPage {
    get loginBox() {
        return loginBoxComponent;
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }
}

export default new LoginPage();
