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

test('Section_02_KO_UI_Tests - Working with Inputs', async ({page} )=> {

  //Go to the Application
  await page.goto("http://zero.webappsecurity.com/")

  //Get the element from the page which has ID 'signin_button' and click on it
  await page.click('#signin_button')

  //Get the element from the page which has ID 'user_login' and type 'some username' in it
  await page.type('#user_login','some username')

  //Get the element from the page which has ID '#user_password' and type 'some password' in it
  await page.type('#user_password','some password')

  //Get the element from the page which has text 'Sign in' and click on it
  await page.click('text=Sign in')

  //Get the element which has class 'alert-error'
  const msg_error_login = await page.locator('.alert-error')

  //Assertion - Element: msg_error_login must have the text 'Login and/or password are wrong.'
  await expect(msg_error_login).toContainText('Login and/or password are wrong.')

})


// await page.goto("http://zero.webappsecurity.com/")
// await page.click('#signin_button')

// await page.type('#user_login','some username')
// await page.type('#user_password','some password')

// await page.click('text=Sign in')

// const msg_error_login = await page.locator('.alert-error')
// await expect(msg_error_login).toContainText('Login and/or password are wrong.')
