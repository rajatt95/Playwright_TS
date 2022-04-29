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

test.skip('Section_02_KO_UI_Tests - Selectors', async ({page} )=> {

    //Get the element from the page and click on it

    //Text 
    await page.click('text=Sign in')

    //CSS Selector 
    await page.click('button') // Tag
    await page.click('#id') // ID
    await page.click('.class') // Class

     //Only Visible 
     await page.click('.submit-button:visible') //Class
   
     //Combinations
     await page.click('#username .first') // ID and Class

     //XPath
     await page.click('//button') // Tag

})
