import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class LoginPage extends AbstractPage {
  // Define selectors
  //Page, Locator -> Interface
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator
  readonly loginForm: Locator


  // Initialize selectors using constructor
  // Page - > Interface
  constructor(page: Page) {
    super(page)
    this.page = page
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.loginForm = page.locator('#login_form')
  }//constructor

  // Define login page methods
  async login(username: string, password: string) {
    await this.usernameInput.type(username)
    await this.passwordInput.type(password)
    await this.submitButton.click()

    if(username == 'username' && password == 'password'){
      console.log('This is added for - SSL Certificate Error fix')
      //This is added for - SSL Certificate Error fix
      await this.page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    }//if

  }//login

  async assertErrorMessage() {
    //Assertion for message: Login and/or password are wrong.
    await expect(this.errorMessage).toContainText('Login and/or password are wrong')
  }//assertErrorMessage

  async snapshotLoginForm() {
     expect(await this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
  }//snapshotLoginForm

  async snapshotErrorMessage() {
    expect(await this.errorMessage.screenshot()).toMatchSnapshot('login-error.png')
  }//snapshotErrorMessage


}//class -> LoginPage
