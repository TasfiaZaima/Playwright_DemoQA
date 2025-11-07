import { test, expect } from '@playwright/test';

test('DEMOQA Elements-Full Interaction Flow', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');
  await page.locator('.header-wrapper').first().click();
  await page.locator('.header-wrapper').first().click();
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Tasfia Zaima');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('vardelld43@englishity.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangladesh');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Bangladesh');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Name:Tasfia ZaimaEmail:').click();

  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  await page.getByRole('button', { name: 'Toggle' }).click();
  await page.locator('.rct-icon.rct-icon-uncheck').first().click();
  await page.getByRole('button', { name: 'Toggle' }).nth(2).click();
  await page.locator('li:nth-child(2) > ol > li > .rct-text > label > .rct-checkbox > .rct-icon > path').first().click();
  await page.locator('li:nth-child(2) > ol > li:nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();


await page.getByText('Radio Button').click();
  await page.getByText('Yes').click();
  await page.getByText('You have selected Yes').click();
  await page.getByText('Impressive').click();
  await page.getByText('You have selected Impressive').click();
  await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('Kierra');
  await page.getByRole('gridcell', { name: 'Kierra', exact: true }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Tasfia');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Zaima');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('vardelld43@englishity.com');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('10');
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('200');
  await page.getByRole('textbox', { name: 'Department' }).click();
  await page.getByRole('textbox', { name: 'Department' }).fill('CSE');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#delete-record-3 > svg > path').click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('');
  await page.locator('#edit-record-4 > svg').click();
  await page.locator('.col-md-2').first().click();
  await page.getByRole('textbox', { name: 'Age' }).fill('20');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('Zaima');
  await page.locator('#basic-addon2 > span > svg').click();
  await page.locator('body').press('Enter');


  await page.getByRole('listitem').filter({ hasText: 'Buttons' }).click();
//   await page.getByRole('button', { name: 'Double Click Me' }).click();
//   await page.getByText('You have done a double click').click();
  await page.getByRole('button', { name: 'Right Click Me' }).hover();
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await page.getByText('You have done a dynamic click').click();
});