import { Page } from '@playwright/test'

export class AbstractPage {

  //Page -> Interface
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }//constructor

  async wait(time) {
    await this.page.waitForTimeout(time)
  }//wait

}//class -> AbstractPage
