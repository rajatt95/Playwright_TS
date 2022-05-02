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
    
    test('TestInfo Object',async ({page},TestInfo)=>{

        await page.goto('https://example.com/')

        //Print the TestInfo object
        //console.log(TestInfo)

        console.log(TestInfo.title)
        console.log(TestInfo.file)
        console.log(TestInfo.outputDir)
        console.log(TestInfo.timeout)
    })

    test('TestInfo Object',async ({page},TestInfo)=>{
        console.log(TestInfo.title)
        console.log(TestInfo.file)
        console.log(TestInfo.outputDir)
        console.log(TestInfo.timeout)
    })


})//describe

  