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
    
    test('Mouse Movement Simulation',async ({page})=>{
        
        await page.goto('https://example.com/')

        await page.mouse.move(0,0)
        await page.waitForTimeout(2000)
        await page.mouse.down()
        await page.waitForTimeout(2000)
        await page.mouse.move(0,100)
        await page.waitForTimeout(2000)
        await page.mouse.up()
        await page.waitForTimeout(2000)
      
    })//test

})//describe

  