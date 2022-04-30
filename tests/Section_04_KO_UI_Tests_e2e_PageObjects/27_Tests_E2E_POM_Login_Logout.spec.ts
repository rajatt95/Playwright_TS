/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel('Section_04_KO_UI_Tests : E2E and POM - Login / Logout Flow', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  // Before Hook
  test.beforeEach(async ({ page }) => {
    
    //Initializing the object of classes
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    await homePage.visit()
  })

  // Negative Scenario
  test('Negative Scenario for login', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.wait(3000)
    await loginPage.assertErrorMessage()
  })

  // Positive Scenario + Logout
  test('Positive Scenario for login + logout', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')

    // //This is added for - SSL Certificate Error fix
    // await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

    const accountSummaryTab = await page.locator('#account_summary_tab')
    await expect(accountSummaryTab).toBeVisible()

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
