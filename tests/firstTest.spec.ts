import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto("http://localhost:4200")
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
})

test ('User facing locators', async ({page}) => {
    await page.getByRole('textbox', {name:"Email"}).first().click();
    await page.getByRole('button', {name:"Sign in"}).first().click();

    await page.getByLabel("Email").first().click();

    await page.getByPlaceholder('Jane Doe').click();

    await page.getByTestId('SignIn').click();

    await page.getByText('Using the Grid').click();
    await page.getByTitle('IoT Dashboard').click();
})

test ('Locating child elements', async ({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 2")').click();
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();
    await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click();
    await page.locator('nb-card').nth(3).getByRole('button').click();

})