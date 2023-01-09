import { expect, Page } from '@playwright/test';
const homeTitle = '[class="title"]'
const burgerMenu = '[id="react-burger-menu-btn"]'
const aboutLink = '[id="about_sidebar_link"]'

export default class HomePage {

    constructor(public page: Page) {
    }

    async expectHeaderToHaveText(text: string) {
        await expect(this.page.locator(homeTitle)).toHaveText(text);
    }

    async burgerMenuClick() {
        await this.page.locator(burgerMenu).click()
    }

    async aboutButtClick() {
        await this.page.locator(aboutLink).click()
    }
}