import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spyro-soft.com/');
  await page.locator('#menu-item-125157').getByRole('link', { name: 'Careers' }).click();
  await page.getByRole('link', { name: 'Browse open positions' }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Skills All skills .NET').click();
  await page.getByRole('checkbox', { name: 'QA' }).check();
  await page.goto('https://spyro-soft.com/career?area=all&skills=qa&location=all&experience=all');
  await page.getByRole('link', { name: 'QA Automation Test Engineer (Java) up to 120 PLN net B2B up to 14800 PLN gross' }).click();
  const textElement = page.getByText('Experience with Karate and/ or Playwright');
  await expect(textElement).toHaveText('Experience with Karate and/ or Playwright');
});