import BasePage from './../pages/base.page.js';
import loginBoxComponent from './../components/login/login-box.component.js';

class LoginPage extends BasePage{
       constructor(){
        super('')
    }
    get loginBox() {
        return loginBoxComponent;
    }

    get userName() {
        return this.loginBox.userName;
    }

    get password() {
        return this.loginBox.password;
    }

    get loginButton() {
        return this.loginBox.loginButton;
    }

    get errorMessage() {
        return this.loginBox.errorMessage;
    }

    async clearCredentials({ userName = true, password = true } = {}) {
        if (userName) {
            await this.loginBox.userName.click();
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
        }

        if (password) {
            await this.loginBox.password.click();
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
        }
    }

    async fillCredentials(username, password) {
        if (username !== undefined) {
            await this.loginBox.userName.setValue(username);
        }
        if (password !== undefined) {
            await this.loginBox.password.setValue(password);
        }
    }

    async submitLogin() {
        await this.loginBox.loginButton.click();
    }

    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.submitLogin();
    }


}

export default new LoginPage();
