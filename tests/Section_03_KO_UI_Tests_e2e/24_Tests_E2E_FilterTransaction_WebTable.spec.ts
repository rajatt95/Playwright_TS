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

import {test,expect} from '@playwright/test'

//test.describe('Test suite - Execution: DEFAULT - Section_03_KO_UI_Tests - E2E - Login/Logout flow',()=>{
//test.describe.serial('Test suite - Execution: SERIAL',()=>{
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Filter Transactions',()=>{
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    //This is added for - SSL Certificate Error fix 
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

  })

  test('Verify the results for each account', async ({ page }) => {
    await page.click('#account_activity_tab')

    //Select value from Dropdown (Select-Option Tag)
    await page.selectOption('#aa_accountId', '2')

    //Web Table
    const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
    await expect(checkingAccount).toHaveCount(3)

    await page.selectOption('#aa_accountId', '4')
    const loanAccount = await page.locator('#all_transactions_for_account tbody tr')
    await expect(loanAccount).toHaveCount(2)

    //Assertion for message: No results
    await page.selectOption('#aa_accountId', '6')
    const noResults = await page.locator('.well')
    await expect(noResults).toBeVisible()
  })

})//describe

  