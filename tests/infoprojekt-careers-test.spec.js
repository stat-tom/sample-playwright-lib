import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://infoprojekt.pl/');
  await page.getByRole('link', { name: 'JOIN INFOPROJEKT' }).click();
  await page.getByRole('heading', { name: 'Full Stack .NET Developer' }).click();
  const sendCvButton = await page.getByRole('link', { name: 'SEND US YOUR CV' });
  await expect(sendCvButton).toBeVisible();
  await expect(sendCvButton).toBeEnabled();
});