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
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Payment',()=>{
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    //This is added for - SSL Certificate Error fix 
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

  })

  test('Should send new payment', async ({ page }) => {
    await page.click('#pay_bills_tab')

    //Select value from Dropdown (Select-Option Tag) - Attribute 'value' is present
    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    await page.waitForSelector('#sp_payee_details')
    
    //Select value from Dropdown (Select-Option Tag) - Attribute 'value' is present
    await page.selectOption('#sp_account', '6')
    await page.type('#sp_amount', '5000')
    
    //Type value for Date Picker
    await page.type('#sp_date', '2021-11-09')
    await page.type('#sp_description', 'Some random message')
    await page.click('#pay_saved_payees')

    //Assertion for message: The payment was successfully submitted
    const message = await page.locator('#alert_content > span')
    await expect(message).toBeVisible()
    await expect(message).toContainText('The payment was successfully submitted')

  })

})//describe

  