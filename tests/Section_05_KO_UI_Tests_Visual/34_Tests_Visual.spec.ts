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

import { test, expect } from '@playwright/test'

test.describe.parallel('Section_05_KO_UI_Tests_Visual : Visual Regression Testing Example', () => {
  
  test('Full Page Snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    expect(await page.screenshot()).toMatchSnapshot('homepage.png')
  })

  test('Single Element Snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    const pageElement = await page.$('h1')
    expect(await pageElement.screenshot()).toMatchSnapshot('page-title.png')
  })

})//describe