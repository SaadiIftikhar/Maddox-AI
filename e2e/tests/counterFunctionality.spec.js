const { test, expect } = require('@playwright/test');
const { HomePage } = require('../e2e/pages/homePage');
const { LoginPage } = require('../e2e/pages/loginPage');

test.describe('Counter Functionality Tests', () => {
    let homePage;
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);

        // First login
        await loginPage.navigateToLoginPage();
        await loginPage.verifyLoginPageState();
        await loginPage.login('test@maddox123.ai', 'supersecure');

        // Verify home page elements
        await homePage.verifyHomePageState();
    });

    test('Should increment counter value by 2', async ({ page }) => {

        // Click increment button and verify value increases by 1
        await homePage.increment();
        await homePage.verifyCounterValue('1');

        // Click increment again and verify value increases by 1
        await homePage.increment();
        await homePage.verifyCounterValue('2');
        
        // Verify buttons are still enabled
        await homePage.verifyAllButtonsEnabled();
    });

    test('Should decrement counter value by 2', async ({ page }) => {
        // First increment twice to have a value to decrement from
        await homePage.increment();
        await homePage.increment();
        await homePage.verifyCounterValue('2');

        // Click decrement button and verify value decreases by 1
        await homePage.decrement();
        await homePage.verifyCounterValue('1');

        // Click decrement again and verify value decreases by 1
        await homePage.decrement();
        await homePage.verifyCounterValue('0');
        
        // Verify buttons are still enabled
        await homePage.verifyAllButtonsEnabled();
    });

    test('Should reset counter value to 0', async ({ page }) => {
        // First increment a few times to have a value to reset from
        await homePage.increment();
        await homePage.increment();
        await homePage.increment();
        await homePage.verifyCounterValue('3');

        // Click reset button and verify value goes back to 0
        await homePage.reset();
        await homePage.verifyCounterValue('0');
        
        // Verify buttons are still enabled
        await homePage.verifyAllButtonsEnabled();
    });

    test('Should decrement counter below zero', async ({ page }) => {
        await homePage.decrement();
        await homePage.verifyCounterValue('-1');

        await homePage.decrement();
        await homePage.verifyCounterValue('-2');
        
        await homePage.verifyAllButtonsEnabled();
    });
});
