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

import {loadHomePage, assertPageTitle, assertPageURL} from '../../utils/Utils_Example'

test('Section_02_KO_UI_Tests - 16_ArtifactsOnFail_Video_Screenshot.spec', async ({page} )=> {

    await loadHomePage(page)
    
    //await assertPageTitle(page)
    console.log('Assertion for Page Title')
    await expect(page).toHaveTitle('Example Domain - Fail')

    await assertPageURL(page)
       
})
