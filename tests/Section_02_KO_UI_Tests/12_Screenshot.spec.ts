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
test('Section_02_KO_UI_Tests - Screenshots - Element, Visible Screen, Fulll Page', async ({page} )=> {

    //Go to the Application
    await page.goto("https://github.com/rajatt95")

    //Screenshot (Full Page)   
    await page.screenshot({path:'./screenshots/Screenshot_FullPage.png',fullPage:true})

    //Screenshot (Visible Screen)   
    await page.screenshot({path:'./screenshots/Screenshot_VisibleScreen.png'})

    //Screenshot (Element)   
    //Get the element which has CSS Selector h1
    const profile_editable_area = await page.locator('.js-profile-editable-area')
    await profile_editable_area.screenshot({path:'./screenshots/Screenshot_Element.png'})

})

  