import { test, expect } from "@playwright/test";
import CheckoutPage from "../pages/checkoutPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import customers from '../fixtures/customer.json'
const customer = customers[0]

test('Successful shoping proces', async ({ page, browserName }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const checkoutPage = new CheckoutPage(page)

    await loginPage.baseURL()
    await loginPage.logInForm(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`)
    await homePage.addBackPackItem.click()
    await homePage.addBackLightItem.click()
    await homePage.shoppingCartLink.click()

    await checkoutPage.checkoutButton.click()
    await checkoutPage.shoppingForm(customer.firstName, customer.lastName, customer.postalCode);
    await expect(checkoutPage.itemTotal).toHaveText('Item total: $39.98')
    await expect(checkoutPage.tax).toHaveText('Tax: $3.20')
    await expect(checkoutPage.total).toHaveText('Total: $43.18')

    await checkoutPage.finishButton.click()
    await expect(checkoutPage.title).toHaveText('Checkout: Complete!')
    await page.screenshot({ path: 'homepage-'+browserName+'.png', fullPage: true }); 
})