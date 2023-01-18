import { Page } from '@playwright/test';

export default class LoginPage {

    constructor(public page: Page) {
    }

    get userNameField() {
        return this.page.getByTestId('username')
    }

    get passwordField() {
        return this.page.getByTestId('password')
    }

    get errorMessage() {
        return this.page.getByTestId('error');
    }

    get loginButton() {
        return this.page.locator('#login-button');
    }

    async baseURL() {
        await this.page.goto(`${process.env.BASE_URL}`)
    }

    async logInForm(username, password) {
        if (username === "" && password === "") {
            await this.loginButton.click()
        } else if (username === "") {
            await this.passwordField.fill(password)
            await this.loginButton.click()
        } else if (password === "") {
            await this.userNameField.fill(username)
            await this.loginButton.click()
        } else {
            await this.userNameField.fill(username)
            await this.passwordField.fill(password)
            await this.loginButton.click()
        }
    }

}