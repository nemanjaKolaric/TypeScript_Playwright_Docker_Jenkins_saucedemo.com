import { Page } from '@playwright/test';

export default class HomePage {

    constructor(public page: Page) {
    }

    get shoppingCartBadge() {
        return this.page.locator('.shopping_cart_badge')
    }

    get shoppingCartLink() {
        return this.page.locator('.shopping_cart_link')
    }

    get menuButton() {
        return this.page.locator('#react-burger-menu-btn')
    }

    get allItemsLink() {
        return this.page.locator('#inventory_sidebar_link')
    }

    get aboutLink() {
        return this.page.locator('#about_sidebar_link')
    }

    get logOutLink() {
        return this.page.locator('#logout_sidebar_link')
    }

    get resetAppLink() {
        return this.page.locator('#reset_sidebar_link')
    }

    get addBackPackItem() {
        return this.page.locator('#add-to-cart-sauce-labs-backpack')
    }

    get addBackLightItem() {
        return this.page.locator('#add-to-cart-sauce-labs-bike-light')
    }

    get removeBackPackItem() {
        return this.page.locator('#remove-sauce-labs-backpack')
    }

    get backPackItemPage() {
        return this.page.locator('.inventory_item:nth-child(1) .inventory_item_name')
    }

}