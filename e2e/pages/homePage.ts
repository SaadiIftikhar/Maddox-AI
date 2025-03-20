import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Home/Counter page
 */
export class HomePage {
    readonly page: Page;
    readonly url: string = 'http://localhost:3000/';
    
    // Locators
    readonly title: Locator;
    readonly mainTitle: Locator;
    readonly incrementButton: Locator;
    readonly decrementButton: Locator;
    readonly resetButton: Locator;
    readonly logoutButton: Locator;
    readonly counterValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.getByRole('heading', { name: 'Home' });
        this.title = page.getByRole('heading', { name: 'Counter' });
        this.incrementButton = page.getByRole('button', { name: '+' });
        this.decrementButton = page.getByRole('button', { name: '-' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.counterValue = page.getByText(/^(-?\d+)$/);
    }

    /**
     * Navigates to the home page
     */
    async navigateToHomePage() {
        await this.page.goto(this.url);  
    }

    /**
     * Clicks the increment button
     */
    async increment() {
        await this.incrementButton.click();
    }

    /**
     * Clicks the decrement button
     */
    async decrement() {
        await this.decrementButton.click();
    }

    /**
     * Clicks the reset button
     */
    async reset() {
        await this.resetButton.click();
    }

    /**
     * Clicks the logout button
     */
    async logout() {
        await this.logoutButton.click();
        await this.page.waitForLoadState('networkidle');
    }


    /**
     * Verifies the counter value
     * @param expectedValue - The expected counter value
     */
    async verifyCounterValue(expectedValue: string) {
        await expect(this.counterValue).toBeVisible();
        await expect(this.counterValue).toHaveText(expectedValue);
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
        await expect(this.mainTitle).toBeVisible();
        await expect(this.mainTitle).toHaveText('Home');
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Counter');
        await expect(this.incrementButton).toBeVisible();
        await expect(this.decrementButton).toBeVisible();
        await expect(this.resetButton).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    }

    /**
     * Verifies all buttons are enabled
     */
    async verifyAllButtonsEnabled() {
        await expect(this.incrementButton).toBeEnabled();
        await expect(this.decrementButton).toBeEnabled();
        await expect(this.resetButton).toBeEnabled();
        await expect(this.logoutButton).toBeEnabled();
    }

    /**
     * Verifies the complete state of the home page
     */
    async verifyHomePageState() {
        await this.verifyPageLoad();
        await this.verifyAllElementsVisible();
        await this.verifyAllButtonsEnabled();
        await this.verifyCounterValue('0');
    }
} 