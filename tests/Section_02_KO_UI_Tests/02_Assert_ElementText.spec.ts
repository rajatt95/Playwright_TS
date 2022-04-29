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

test('Section_02_KO_UI_Tests - 02_Assert_ElementText', async ({page} )=> {

    //Go to the Application
    await page.goto("https://example.com/")

    //Get the element which has CSS Selector h1
    const heading_PageTitle = await page.locator('h1')

    //Assertion - Element: heading_PageTitle must have the text 'Example Domain'
    await expect(heading_PageTitle).toContainText('Example Domain')
    
})
