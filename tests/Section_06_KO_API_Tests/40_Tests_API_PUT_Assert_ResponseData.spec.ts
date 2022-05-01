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

  test('PUT Request - Update User', async ({ request }) => {
    //This is a PUT Request
    const response = await request.put(`${baseUrl}/users/2`, {
      //Request Body
      data: {
        name: 'new name',
        job: 'new job',
      },
    })
    
    //Extract the Response
    const responseBody = JSON.parse(await response.text())

    //Print the Response body in console
    console.log(responseBody)

    //Assertions
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('new name')
    expect(responseBody.job).toBe('new job')
    expect(responseBody.updatedAt).toBeTruthy()
  })


})//describe