import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Login page
 */
export class LoginPage {
    readonly page: Page;
    readonly url: string = 'http://localhost:3000/login';
    
    // Locators
    readonly title: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByRole('heading', { name: 'Home' });
        this.title = page.getByRole('heading', { name: 'Demo Login Form' });
        this.emailInput = page.locator('#email-input');
        this.passwordInput = page.locator('#password-input');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid email or password.');
    }

    /**
     * Navigates to the login page
     */
    async navigateToLoginPage() {
        await this.page.goto(this.url);
    }

    /**
     * Performs login with the given credentials
     * @param email - The email to login with
     * @param password - The password to login with
     */
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }


    /**
     * Verifies that login failed and error message is shown
     */
    async verifyFailedLogin() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Invalid email or password. Try again.');
    }

    /**
     * Verifies the page has loaded completely
     */
    async verifyPageLoad() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(this.url);
    }

    /**
     * Verifies all elements are visible on the page
     */
    async verifyAllElementsVisible() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Demo Login Form');
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    /**
     * Verifies the login button is enabled
     */
    async verifyLoginButtonEnabled() {
        await expect(this.loginButton).toBeEnabled();
    }

    /**
     * Verifies the form input values
     * @param email - The expected email value
     * @param password - The expected password value
     */
    async verifyFormValues(email: string, password: string) {
        await expect(this.emailInput).toHaveValue(email);
        await expect(this.passwordInput).toHaveValue(password);
    }

    /**
     * Verifies no error message is shown
     */
    async verifyNoErrorMessage() {
        await expect(this.errorMessage).not.toBeVisible();
    }

    /**
     * Verifies the complete state of the login page
     */
    async verifyLoginPageState() {
        await this.verifyPageLoad();
        await this.verifyAllElementsVisible();
        await this.verifyLoginButtonEnabled();
        await this.verifyNoErrorMessage();
    }
}
