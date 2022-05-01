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
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('Section_05_KO_UI_Tests_Visual : Visual Regression Testing Example - Page Object Model', () => {
  
  let homepage: HomePage
  let loginpage: LoginPage

  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page)
    loginpage = new LoginPage(page)

    await homepage.visit()
    await homepage.clickOnSignIn()
  })

  test('Login Form', async ({ page }) => {
    await loginpage.snapshotLoginForm()
  })

  test('Login Error Message', async ({ page }) => {
    await loginpage.login('Fail', 'some invalid password')
    await loginpage.snapshotErrorMessage()
  })

})//describe