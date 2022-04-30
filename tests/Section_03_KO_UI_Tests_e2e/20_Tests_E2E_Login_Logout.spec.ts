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
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Login/Logout flow',()=>{
    
    //Before Hook
    test.beforeEach(async({page})=>{
        await page.goto('http://zero.webappsecurity.com/')
    })

    //Negative Scenario
    test('Negative Scenario for Login',async({page})=>{

        await page.click('#signin_button')

        await page.type('#user_login','Invalid username')
        await page.type('#user_password','Invalid password')
        await page.click('text=Sign in')

        //Assertion for message: Login and/or password are wrong.
        const msg_error_login = await page.locator('.alert-error')
        await expect(msg_error_login).toContainText('Login and/or password are wrong.')

        await expect(msg_error_login).toHaveAttribute('class','alert alert-error')
        
        await expect(msg_error_login).toHaveCSS('font-size','14px')
        //await expect(msg_error_login).toHaveCSS('font-family','Helvetica Neue",Helvetica,Arial,sans-serif') 

    })

    //Positive Scenario
    test('Positive Scenario for Login + Logout',async({page})=>{

        await page.click('#signin_button')

        await page.type('#user_login','username')
        await page.type('#user_password','password')
        await page.click('text=Sign in')

        //This is added for - SSL Certificate Error fix
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

        const tab_AccountSummary = await page.locator('#account_summary_tab')
        await expect(tab_AccountSummary).toBeVisible()
        
        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')

    })

})//describe

  