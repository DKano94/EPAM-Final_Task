class loginBoxComponent {
     get rootElement(){
        return $('.login-box');
        // alternative //*[@id="login_button_container"]/div
     }

    get userName(){
        return this.rootElement.$('//*[@id="user-name"]');
       // alternative input[data-test='username'] 
    }

    get password(){
        return this.rootElement.$('//*[@id="password"]');
        // alternative input[data-test='password'] 
    }

    get loginButton(){
        return this.rootElement.$('//*[@id="login-button"]');
        // alternative input[data-test='login-button']  
    }

    get errorMessage(){
        return this.rootElement.$('//*[@id="login_button_container"]/div/form/div[3]/h3/text()');
        // alternative div [class="error-message-container"]    
    }
}

export default new loginBoxComponent();