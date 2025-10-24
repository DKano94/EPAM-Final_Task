class loginBox {
     get rootElement(){
        return $('.login-box');
        // alternative //*[@id="login_button_container"]/div
     }

    get userName(){
        return this.rootElement.$('//*[@id="user-name"]');
    }

    get password(){
        return this.rootElement.$('//*[@id="password"]');
    }

    get loginButton(){
        return this.rootElement.$('//*[@id="login-button"]');
    }
}
module.exports = loginBox;