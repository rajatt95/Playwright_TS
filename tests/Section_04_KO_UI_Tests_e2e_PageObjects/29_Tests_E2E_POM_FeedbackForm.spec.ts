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

import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

test.describe.parallel('Section_04_KO_UI_Tests : E2E and POM - Feedback Form', () => {
  let homePage: HomePage
  let feedbackPage: FeedbackPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    feedbackPage = new FeedbackPage(page)

    await homePage.visit()
    await homePage.clickOnFeedbackLink()
  })

  // Reset feedback form
  test('Reset feedback form', async ({ page }) => {
    await feedbackPage.fillForm(
      'name',
      'email@mail.com',
      'subject',
      'my awesome message'
    )
    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
  })

  // Submit feedback form
  test('Submit feedback form', async ({ page }) => {
    await feedbackPage.fillForm(
      'name',
      'email@mail.com',
      'subject',
      'my awesome message'
    )
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
  })
})//describe
