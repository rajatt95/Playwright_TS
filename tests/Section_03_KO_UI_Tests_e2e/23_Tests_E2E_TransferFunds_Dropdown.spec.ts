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
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Transfer Funds and Make Payments',()=>{
    
    test.beforeEach(async ({ page }) => {
        //Go to Application
        await page.goto('http://zero.webappsecurity.com/index.html')
        
        //Login
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')

        //This is added for - SSL Certificate Error fix
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

      })
    
      test('Transfer funds', async ({ page }) => {
        await page.click('#transfer_funds_tab')

        //<select id="tf_fromAccountId" name="fromAccountId" class="input-xlarge" required="required">
          //<option value="1">
          //Savings(Avail. balance = $ 1000)
          //</option>
        //</select>
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.type('#tf_amount', '500')
        await page.type('#tf_description', 'Test message')
        await page.click('#btn_submit')
    
        //Assertion for Header: Transfer Money & Make Payments - Verify
        const boardHeader = await page.locator('h2.board-header')
        await expect(boardHeader).toContainText('Verify')
        await page.click('#btn_submit')
    
        
        //Assertion for message: You successfully submitted your transaction
        const message = await page.locator('.alert-success')
        await expect(message).toContainText('You successfully submitted your transaction')
      })
    
})//describe

  