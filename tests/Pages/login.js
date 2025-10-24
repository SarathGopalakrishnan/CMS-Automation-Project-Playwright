const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = this.page.getByRole('button', { name: 'Login' });
    }

    async goToLogin() {
        await this.page.goto('https://login-shore.synergymarinetest.com/Account/Login');
    }

    async enterUsername(username) {
        await this.username_textbox.fill(username);
    }

    async enterPassword(password) {
        await this.password_textbox.fill(password);
    }

    async clickOnLogin() {
        await this.login_button.click();
    }

    // --- Potential Fix/Improvement: Combine steps into one method ---
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
    }
    // -----------------------------------------------------------------
};