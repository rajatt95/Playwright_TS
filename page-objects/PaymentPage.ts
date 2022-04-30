import { expect, Locator, Page } from '@playwright/test'

export class PaymentPage { 
  
  //Page, Locator -> Interface
  readonly page: Page
  readonly payeeSelectbox: Locator
  readonly payeeDetailButton: Locator
  readonly payeeDetail: Locator
  readonly accountSelectbox: Locator
  readonly amountInput: Locator
  readonly dateInput: Locator
  readonly descriptionInput: Locator
  readonly submitPaymentButton: Locator
  readonly message: Locator

  constructor(page: Page) {
    this.page = page
    this.payeeSelectbox = page.locator('#sp_payee')
    this.payeeDetailButton = page.locator('#sp_get_payee_details')
    this.payeeDetail = page.locator('#sp_payee_details')
    this.accountSelectbox = page.locator('#sp_account')
    this.amountInput = page.locator('#sp_amount')
    this.dateInput = page.locator('#sp_date')
    this.descriptionInput = page.locator('#sp_description')
    this.submitPaymentButton = page.locator('#pay_saved_payees')
    this.message = page.locator('#alert_content > span')
  }//constructor

  async createPayment() {
    await this.payeeSelectbox.selectOption('apple')
    await this.payeeDetailButton.click()
    await expect(this.payeeDetail).toBeVisible()
    await this.accountSelectbox.selectOption('6')
    await this.amountInput.type('5000')
    await this.dateInput.type('2021-11-09')
    await this.descriptionInput.type('Some message')
    await this.submitPaymentButton.click()
  }//createPayment

  async assertSuccessMessage() {
    await expect(this.message).toBeVisible()
    //Assertion for message: The payment was successfully submitted
    await expect(this.message).toContainText('The payment was successfully submitted')
  }//assertSuccessMessage

}//class -> PaymentPage
