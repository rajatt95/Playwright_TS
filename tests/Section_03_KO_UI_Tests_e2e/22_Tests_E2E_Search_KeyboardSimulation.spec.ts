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

test.describe('Section_03_KO_UI_Tests : E2E - Search Results', () => {

    test('Should find search results', async ({ page }) => {
      await page.goto('http://zero.webappsecurity.com/index.html')
      await page.type('#searchTerm', 'bank')
      
      //Press ENTER using Keyboard
      await page.keyboard.press('Enter')
  
      const numberOfLinks = await page.locator('li > a')

      //Assertion for links count
      await expect(numberOfLinks).toHaveCount(2)
    })
  
})//describe

  