const { test, expect } = require('@playwright/test');
const { HomePage } = require('../e2e/pages/homePage');
const { LoginPage } = require('../e2e/pages/loginPage');

test.describe('Login Flow Tests', () => {
    let loginPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test('Should navigate to the login page', async ({ page }) => {
        // Navigate to login page
        await loginPage.navigateToLoginPage();

        // Verify login page elements
        await loginPage.verifyLoginPageState();
    });

    test('Should login successfully', async ({ page }) => {
        // Navigate to login page
        await loginPage.navigateToLoginPage();

        // Verify login page elements
        await loginPage.verifyLoginPageState();

        // Perform login with valid credentials
        await loginPage.login('test@maddox123.ai', 'supersecure');

        // Verify home page elements
        await homePage.verifyHomePageState();
    });

    test('Should show error on unsuccessful login', async ({ page }) => {
        // Navigate to login page
        await loginPage.navigateToLoginPage();

        // Verify login page elements
        await loginPage.verifyLoginPageState();

        // Perform login with invalid credentials
        await loginPage.login('wrong@email.com', 'wrongpassword');

        // Verify error state and elements
        await loginPage.verifyAllElementsVisible();
        await loginPage.verifyLoginButtonEnabled();
        await loginPage.verifyFailedLogin();
        await loginPage.verifyFormValues('wrong@email.com', 'wrongpassword');
    
    });
}); 