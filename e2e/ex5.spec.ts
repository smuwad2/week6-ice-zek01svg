import { test, expect } from '@playwright/experimental-ct-vue';

import Ex5 from '../src/components/Ex5.vue';

test('ex5_filldetails', async ({ mount }) => {
  const component = await mount(Ex5);
  await component.locator('input#name').fill("John Doe");
  await expect(component.locator('div.preview-card h3')).toHaveText("John Doe");
  await component.locator('input#job').fill("Software Engineer");
  await expect(component.locator('div.preview-card h4')).toHaveText("Software Engineer");
  await component.locator('textarea#bio').fill("A passionate software engineer with a love for coding and problem-solving.");
  await expect(component.locator('div.preview-card p')).toHaveText("A passionate software engineer with a love for coding and problem-solving.");
  
});

test('ex5_changetheme', async ({mount})=> {
  const component = await mount(Ex5);
  await component.getByRole('button').nth(0).click(); // Light theme
  await expect(component.locator('div.preview-card')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(component.locator('div.preview-card')).toHaveCSS('color', 'rgb(0, 0, 0)');
  await component.getByRole('button').nth(0).click(); // Neon theme
  await expect(component.locator('div.preview-card')).toHaveCSS('background-color', 'rgb(57, 255, 20)');
  await expect(component.locator('div.preview-card')).toHaveCSS('color', 'rgb(0, 0, 0)');
  await component.getByRole('button').nth(0).click(); // Dark theme
  await expect(component.locator('div.preview-card')).toHaveCSS('background-color', 'rgb(51, 51, 51)');
  await expect(component.locator('div.preview-card')).toHaveCSS('color', 'rgb(255, 255, 255)');
});