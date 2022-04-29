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

import {test} from '@playwright/test'

import {loadHomePage, assertPageTitle, assertPageURL} from '../../utils/Utils_Example'

test('Section_02_KO_UI_Tests - Custom Functions', async ({page} )=> {

    await loadHomePage(page)
    await assertPageTitle(page)
    await assertPageURL(page)
       
})
