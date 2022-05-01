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

test.describe.parallel('Section_06_KO_API_Tests : API Testing', () => {
  
  const baseUrl = 'https://reqres.in/api'

  test('Simple API Test - Extract Response Body', async ({ request }) => {

    // This is a GET request 
    // URL: https://reqres.in/api/users/3
    const response = await request.get(`${baseUrl}/users/3`)

    //Assertion for Response Status Code
    expect(response.status()).toBe(200)

    //Extracting the Response Body
    const responseBody = JSON.parse(await response.text())

    console.log(responseBody)

  })

})//describe