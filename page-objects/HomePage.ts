import { Locator, Page } from '@playwright/test'

export class HomePage {
  //Page, Locator -> Interface
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator
  readonly linkFeedback: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
    this.linkFeedback = page.locator('#feedback')
  }//constructor

  async visit() {
    const applicationURL = 'http://zero.webappsecurity.com/'
    console.log('Navigating to application: '+applicationURL)
    await this.page.goto(applicationURL)
  }//visit

  async clickOnSignIn() {
    console.log('Clicking on Sign in button')
    await this.signInButton.click()
  }//clickOnSignIn

  async clickOnFeedbackLink() {
    console.log('Clicking on Feedback link')
    await this.linkFeedback.click()
  }//clickOnFeedbackLink

  async searchFor(phrase: string) {
    console.log('Search for: '+phrase)
    await this.searchBox.type(phrase)

    console.log('Press ENTER using Keyboard')
    await this.page.keyboard.press('Enter')
  }//searchFor

}//class -> HomePage
