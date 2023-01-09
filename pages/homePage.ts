import { Page } from '@playwright/test';

const menuButton = '#react-burger-menu-btn'
const allItemsLink = '#inventory_sidebar_link'
const aboutLink = '#about_sidebar_link'
const logOutLink = '#logout_sidebar_link'
const resetAppStateLink = '#reset_sidebar_link'
const addBackPack = '#add-to-cart-sauce-labs-backpack'
export default class HomePage {

    constructor(public page: Page) {
    }

    get shoppingCartBadge() {
        return this.page.locator('.shopping_cart_badge')
    }

    get shoppingCartLink() {
        return this.page.locator('.shopping_cart_link')
    }

    async menuButtonClick() {
        await this.page.locator(menuButton).click()
    }

    async allItemsClick() {
        await this.page.locator(allItemsLink).click()
    }

    async aboutLinkClick() {
        await this.page.locator(aboutLink).click()
    }

    async logOutLinkClick() {
        await this.page.locator(logOutLink).click()
    }

    async resetAppLink() {
        await this.page.locator(resetAppStateLink).click()
    }

    async  addBackPackItem() {
        await this.page.locator(addBackPack).click()
    }

}