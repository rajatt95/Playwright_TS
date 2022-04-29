import {expect} from '@playwright/test'

export async function loadHomePage(page) {
    console.log('Navigating to '+'https://example.com/')
    page.goto('https://example.com/')
}

export async function assertPageURL(page) {
    console.log('Assertion for Page URL')
    await expect(page).toHaveURL('https://example.com/')
}

export async function assertPageTitle(page) {
    console.log('Assertion for Page Title')
    await expect(page).toHaveTitle('Example Domain')
}
