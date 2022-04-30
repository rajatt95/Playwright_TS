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
test.describe.parallel('Test suite - Execution: PARALLEL - Section_03_KO_UI_Tests : E2E - Feedback Form',()=>{
    
    test.beforeEach(async({page})=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#feedback')
    })

    // Reset feedback form
    test('Reset feedback form', async ({ page }) => {
        await page.type('#name', 'Some name')
        await page.type('#email', 'Some email@email.com')
        await page.type('#subject', 'Some subject')
        await page.type('#comment', 'Some nice comment about the application')
        await page.click("input[name='clear']")

        const nameInput = await page.locator('#name')
        const commentInput = await page.locator('#comment')
        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    // Submit feedback form
    test('Submit feedback form', async ({ page }) => {
        await page.type('#name', 'Some name')
        await page.type('#email', 'Some email@email.com')
        await page.type('#subject', 'Some subject')
        await page.type('#comment', 'Some nice comment about the application')
        await page.click("input[type='submit']")

        //This is another way of putting an Assertion for element presence/visible
        await page.waitForSelector('#feedback-title')
    })

})//describe

  