const { test, expect } = require('@playwright/test');
const { HomePage } = require('../e2e/pages/homePage');
const { LoginPage } = require('../e2e/pages/loginPage');

test.describe('Logout Functionality Tests', () => {
    let homePage;
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test('Should load the home page when the user is logged in', async ({ page }) => {
        // Login first
        await loginPage.navigateToLoginPage();
        await loginPage.verifyLoginPageState();
        await loginPage.login('test@maddox123.ai', 'supersecure');

        //After a successful login, you navigate directly to the home page URL
        await homePage.navigateToHomePage();

        // Verify home page elements
        await homePage.verifyHomePageState();
    });

    test('Should log out the user and redirect to the login page', async ({ page }) => {
        // Login first
        await loginPage.navigateToLoginPage();
        await loginPage.verifyLoginPageState();
        await loginPage.login('test@maddox123.ai', 'supersecure');

        // Verify home page elements
        await homePage.verifyHomePageState();

        // Perform logout
        await homePage.logout();

        // Verify login page elements
        await loginPage.verifyLoginPageState();
    });

    test('Should prevent access to the home page if not logged in and redirect to login page', async ({ page }) => {
        // Try to access home page directly without login
        await homePage.navigateToHomePage();

        // Verify login page elements
        await loginPage.verifyLoginPageState();
    });
});
