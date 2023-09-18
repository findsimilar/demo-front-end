import { expect, test } from '@playwright/test';

test('Index page has expected "Demo"', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Demo' })).toBeVisible();
});
