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
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Currency Exchange',()=>{
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    //This is added for - SSL Certificate Error fix 
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

  })
  
  test('Should make currency exchange', async ({ page }) => {
    await page.click('#pay_bills_tab')
    await page.click('text=Purchase Foreign Currency')
    await page.selectOption('#pc_currency', 'EUR')

    //Assertion for message: 1 euro (EUR)
    const rate = await page.locator('#sp_sell_rate')
    await expect(rate).toContainText('1 euro (EUR)')

    await page.type('#pc_amount', '1000')
    await page.click('#pc_inDollars_true')
    await page.click('#pc_calculate_costs')

    //Assertion for message: 1000.00 U.S. dollar (USD)
    const conversionAmount = await page.locator('#pc_conversion_amount')
    await expect(conversionAmount).toContainText('1000.00 U.S. dollar (USD)')

    
    await page.click('#purchase_cash')

    //Assertion for message: Foreign currency cash was successfully purchased
    const message = await page.locator('#alert_content')
    await expect(message).toBeVisible()
    await expect(message).toContainText('Foreign currency cash was successfully purchased')
  })

})//describe

  