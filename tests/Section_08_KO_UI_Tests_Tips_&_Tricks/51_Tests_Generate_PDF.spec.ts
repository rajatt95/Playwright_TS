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

//Rahul Shetty
test.describe.configure( { mode : 'parallel' } );
//test.describe.parallel('Section_08_KO_UI_Tests_: Tips_&_Tricks',()=>{
    
    test.skip('Section_08_KO_UI_Tests_ - Generate PDF',async ({browser})=>{
        
        // 1. Go to package.json
        // 2. Run the node script:
            // npm run test_Tips_Generate_PDF_Github_Profile_rajatt95
            // npm run test_Tips_Generate_PDF_Github_Page_rajatt95
        
    })//test

//})//describe

  