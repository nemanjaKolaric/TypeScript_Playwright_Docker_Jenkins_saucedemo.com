import { Page } from "@playwright/test"

export default class ItemPage {

    constructor(public page: Page) {
    }

    get addBackPackItem() {
        return this.page.getByTestId('add-to-cart-sauce-labs-backpack')
    }

    get removeBackPackItem() {
        return this.page.getByTestId('remove-sauce-labs-backpack')
    }

}