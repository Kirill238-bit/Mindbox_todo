import { test, expect } from '@playwright/test';

test('add item', async ({ page }) => {
  await page.goto('https://mindbox-todo-beige.vercel.app');

  await page.getByPlaceholder('What needs to be done?').fill('todo');
  await page.getByRole("button", { name: '✓' }).click();
  const todo =  await page.getByPlaceholder('What needs to be done?').isVisible();

  expect(todo).toBe(true) 
});

test('change span', async ({ page }) => {
  await page.goto('https://mindbox-todo-beige.vercel.app');

  await page.getByPlaceholder('What needs to be done?').fill('todo');
  await page.getByRole("button", { name: '✓' }).click();
  const todo =  await page.getByText('item leftAllActiveCompletedClear completed').allTextContents();

  expect(todo).toStrictEqual(['1 item leftAllActiveCompletedClear completed']) 

  await page.getByPlaceholder('What needs to be done?').fill('todo2');
  await page.getByRole("button", { name: '✓' }).click();

  const todo2 =  await page.getByText('items leftAllActiveCompletedClear completed').allTextContents();
  expect(todo2).toStrictEqual(['2 items leftAllActiveCompletedClear completed']) 
});

test('change filter to active', async ({ page }) => {
  await page.goto('https://mindbox-todo-beige.vercel.app');

  await page.getByPlaceholder('What needs to be done?').fill('todo1');
  await page.getByRole("button", { name: '✓' }).click();

  await page.getByPlaceholder('What needs to be done?').fill('todo2');
  await page.getByRole("button", { name: '✓' }).click();
  
  const todo2 = await page.locator('div').filter({ hasText: /^todo2$/ }).getByRole('checkbox')
  await todo2.click();
  await page.getByRole('button', { name: 'Active' }).click();

  await expect(todo2).toBeHidden()

});

test('change filter to completed', async ({ page }) => {
  await page.goto('https://mindbox-todo-beige.vercel.app');

  await page.getByPlaceholder('What needs to be done?').fill('todo1');
  await page.getByRole("button", { name: '✓' }).click();

  await page.getByPlaceholder('What needs to be done?').fill('todo2');
  await page.getByRole("button", { name: '✓' }).click();
  
  const todo2 = await page.locator('div').filter({ hasText: /^todo2$/ }).getByRole('checkbox')
  await todo2.click();
  await page.getByRole('button', { name: 'Completed', exact: true }).click();

  await expect(todo2).toBeVisible()

});

test('delete all completed tasks', async ({ page }) => {
  await page.goto('https://mindbox-todo-beige.vercel.app');

  await page.getByPlaceholder('What needs to be done?').fill('todo1');
  await page.getByRole("button", { name: '✓' }).click();

  await page.getByPlaceholder('What needs to be done?').fill('todo2');
  await page.getByRole("button", { name: '✓' }).click();

  await page.getByPlaceholder('What needs to be done?').fill('todo3');
  await page.getByRole("button", { name: '✓' }).click();
  
  const todo2 =await page.locator('div').filter({ hasText: /^todo2$/ }).getByRole('checkbox');
  const todo1 =await page.locator('div').filter({ hasText: /^todo1$/ }).getByRole('checkbox');
  await todo1.click();
  await todo2.click();
  const todo3 = await page.locator('div').filter({ hasText: /^todo3$/ }).getByRole('checkbox')

  await page.getByRole('button', { name: 'Clear completed' }).click();

  await expect(todo3).toBeVisible();
  await expect(todo2).toBeHidden();
  await expect(todo1).toBeHidden();
});



/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
