const { test, expect } = require('@playwright/test');
const { faker, fa } = require('@faker-js/faker');
require('dotenv').config()


var mail = faker.internet.email();
var pass = faker.internet.password();


test('Afaqy Automation Test', async ({ page }) => 
{
    await page.goto(process.env.baseUrl);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise');
    await page.goto(process.env.baseUrl + process.env.login_Register_page);
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
    // Regiser 
    await page.fill(process.env.name_Xpath,faker.person.firstName());
    await page.fill(process.env.email_register_Xpath,mail);
    await page.click(process.env.signup_Button_Xpath);
    await expect(page).toHaveTitle('Automation Exercise - Signup');
    await page.click(process.env.title_id_mr);
    await page.fill(process.env.signup_pass_id,pass);
    await page.locator(process.env.select_days_id).selectOption('2');
    await page.locator(process.env.select_months_id).selectOption('6');
    await page.locator(process.env.select_years_id).selectOption('1994');
    await page.fill(process.env.first_name_id,faker.person.firstName());
    await page.fill(process.env.last_name_id,faker.person.lastName());
    await page.fill(process.env.company_id,faker.company.name());
    await page.fill(process.env.address1_id,'Test');
    await page.fill(process.env.address2_id,'Test');
    await page.locator(process.env.select_country_id).selectOption('India');
    await page.fill(process.env.state_id,'Cairo');
    await page.fill(process.env.city_id,'Cairo');
    await page.fill(process.env.zipcode_id,'5050');
    await page.fill(process.env.mobile_number_id,'01123800251');
    await page.click(process.env.create_Account_Button);
    await expect(page).toHaveTitle('Automation Exercise - Account Created');
    await page.waitForTimeout(5000);

});


test('Afaqy Automation - Login', async ({ page }) => 
{
    await page.goto(process.env.baseUrl);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Automation Exercise');
    await page.goto(process.env.baseUrl + process.env.login_Register_page);
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
    // Login
    await page.fill(process.env.email_Xpath,mail);
    await page.fill(process.env.password_Xpath,pass);
    await page.click(process.env.login_Button_Xpath);
    await page.waitForTimeout(5000);
    await page.click(process.env.logoutButton);

});



