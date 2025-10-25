import LoginPage from './../po/pages/login.page';
import InventoryPage from './../po/pages/inventory.page';
import loginPage from './../po/pages/login.page';
import { usersData, commonPassword } from './../data/login.data';

describe ('Login Page', () => {
    const userName = 'standard_user';
    const passWord = 'secret_sauce';
    
    beforeEach( async () => {
       await LoginPage.open();
    })

    for (const user of usersData) {
    it('Test Login form with empty credentials', async () => {
        // Type Any credentials into "Username" and "Password" fields
        await loginPage.fillCredentials(user.username,commonPassword);
        // Clear the inputs
        await loginPage.clearCredentials();
        // Click "login" button
        await loginPage.submitLogin();
        // Assert the error message "username is requiered"
        await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Username is required'));   
    })

    
    it('Test Login form with credentials by passing Username', async () => {
        // Type Any credentials into "Username" and "Password" fields
        await loginPage.fillCredentials(user.username,commonPassword);
        // Clear Clear the "Password" input.
        await LoginPage.clearCredentials({ userName: false });
        // Click "login" button
        await loginPage.submitLogin();
        // Assert the error message "username is requiered"
        await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Password is required'));            
    })

    
    it('Test Login form with credentials by passing Username & Password', async () => {

        // Type Any credentials into "Username" and "Password" fields
        await loginPage.fillCredentials(user.username,commonPassword);
        // Click "login" button
        await loginPage.login();
        // validate the title “Swag Labs” in the dashboard.
        await InventoryPage.open();
        const title = await browser.getTitle();
        await expect(title).toBe('Swag Labs');  
    })
    }
})