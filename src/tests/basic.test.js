import { expect } from "expect-webdriverio";

describe ('Login Page', () => {
    beforeEach( async () => {
        await browser.url('https://www.saucedemo.com/');
    })

    it('Check page title', async () => {
        const title = await browser.getTitle();
        console.log(`The page title is: ${title}`);
    }
    )

    it('Test Login form with empty credentials', async () => {
        const userName = 'standard_user'
        const passWord = 'secret_sauce'
        const userNameField = await $('input[data-test="username"]');
        const passWordField = await $('input[data-test="password"]');
        const errorMessage = await $('div [class="error-message-container"]');


         // Type Any credentials into "Username" and "Password" fields
        await userNameField.setValue(userName);
        await passWordField.setValue(passWord);
        console.log(userNameField,passWordField);
        // Clear the inputs
        await userNameField.setValue('');
        await passWordField.setValue('');
        console.log(userNameField,passWordField);
        // Click "login" button
        await $("input[data-test='login-button']").click();
        // Assert the error message "username is requiered"
        await expect(errorMessage).toHaveText(expect.stringContaining('Username is required'));
    }
    )


})