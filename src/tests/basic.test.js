import { expect } from "expect-webdriverio";

describe ('Login Page', () => {
    const baseUrl = 'https://www.saucedemo.com/';

    beforeEach( async () => {
        await browser.url(baseUrl);
    })

    async function clearInputValue(element) {
            await element.click();
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
            const value = await element.getValue();
            return value;
        }

    it('Test Login form with empty credentials', async () => {

        const userName = 'standard_user'
        const passWord = 'secret_sauce'
        const userNameField = await $('input[data-test="username"]');
        const passWordField = await $('input[data-test="password"]');
        const errorMessage = await $('div [class="error-message-container"]');
        const loginButton = await $("input[data-test='login-button']");


        // Type Any credentials into "Username" and "Password" fields
        await userNameField.setValue(userName);
        await passWordField.setValue(passWord);
        // Clear the inputs
        await clearInputValue(userNameField);
        await clearInputValue(passWordField);
        // Click "login" button
        await loginButton.click();
        // Assert the error message "username is requiered"
        await expect(errorMessage).toHaveText(expect.stringContaining('Username is required'));
        
    })

    
    it('Test Login form with credentials by passing Username', async () => {

        const userName = 'standard_user'
        const passWord = 'secret_sauce'
        const userNameField = await $('input[data-test="username"]');
        const passWordField = await $('input[data-test="password"]');
        const errorMessage = await $('div [class="error-message-container"]');
        const loginButton = await $("input[data-test='login-button']");

        // Type Any credentials into "Username" and "Password" fields
        await userNameField.setValue(userName);
        await passWordField.setValue(passWord);
        // Clear Clear the "Password" input.
        await clearInputValue(passWordField);
        // Click "login" button
        await loginButton.click();
        // Assert the error message "username is requiered"
        await expect(errorMessage).toHaveText(expect.stringContaining('Password is required'));
        
    })

    
    it('Test Login form with credentials by passing Username & Password', async () => {

        const userName = 'standard_user'
        const passWord = 'secret_sauce'
        const userNameField = await $('input[data-test="username"]');
        const passWordField = await $('input[data-test="password"]');
        const loginButton = await $("input[data-test='login-button']");

        // Type Any credentials into "Username" and "Password" fields
        await userNameField.setValue(userName);
        await passWordField.setValue(passWord);
        // Click "login" button
        await loginButton.click();
        // validate the title “Swag Labs” in the dashboard.
        await browser.url(`${baseUrl}inventory.html`);
        const title = await browser.getTitle();
        await expect(title).toBe('Swag Labs');
    })


})