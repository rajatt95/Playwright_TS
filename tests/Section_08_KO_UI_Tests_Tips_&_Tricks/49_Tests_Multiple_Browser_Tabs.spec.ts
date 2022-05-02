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

test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test('Multiple Browser_Tabs',async ({browser})=>{
        
        const context = await browser.newContext()
        const page1 = await context.newPage()
        const page2 = await context.newPage()
        const page3 = await context.newPage()

        await page1.goto('https://rajatt95.github.io/')
        await page2.goto('https://www.linkedin.com/in/rajat-v-3b0685128/')
        await page3.goto('https://github.com/rajatt95')

        await page1.waitForTimeout(5000)
        
    })//test

})//describe

  