import { Page } from "@playwright/test"

export default class CheckoutPage {

    constructor(public page: Page) {
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    get itemTotal() {
        return this.page.locator('.summary_subtotal_label');
    }

    get tax() {
        return this.page.locator('.summary_tax_label');
    }

    get total() {
        return this.page.locator('.summary_total_label');
    }

    get title() {
        return this.page.locator('.title');
    }

    get checkoutButton() {
        return this.page.locator('#checkout')
    }

    get firtsNameField() {
        return this.page.locator('#first-name')
    }

    get lastNameField() {
        return this.page.locator('#last-name')
    }

    get postalCodeField() {
        return this.page.locator('#postal-code')
    }

    get continueButton() {
        return this.page.locator('#continue')
    }

    get finishButton() {
        return this.page.locator('#finish')
    }

    get removeItemBackPackButton() {
        return this.page.locator('#remove-sauce-labs-backpack')
    }

    async shoppingForm(firstName, lastName, postalCode) {
        if (firstName === "" && lastName === "" && postalCode === "") {
            await this.continueButton.click()
        } else if (firstName === "" && lastName === "") {
            await this.postalCodeField.fill(postalCode)
            await this.continueButton.click()
        } else if (firstName === "" && postalCode === "") {
            await this.lastNameField.fill(lastName)
            await this.continueButton.click()
        } else if (firstName === "") {
            await this.lastNameField.fill(lastName)
            await this.postalCodeField.fill(postalCode)
            await this.continueButton.click()
        } else if (lastName === "" && postalCode === "") {
            await this.firtsNameField.fill(firstName)
            await this.continueButton.click()
        } else if (lastName === "") {
            await this.firtsNameField.fill(firstName)
            await this.postalCodeField.fill(postalCode)
            await this.continueButton.click()
        } else if (postalCode === "") {
            await this.firtsNameField.fill(firstName)
            await this.lastNameField.fill(lastName)
            await this.continueButton.click()
        } else {
            await this.firtsNameField.fill(firstName)
            await this.lastNameField.fill(lastName)
            await this.postalCodeField.fill(postalCode)
            await this.continueButton.click()
        }
    }

}