import { test, expect } from '@playwright/experimental-ct-vue';

import Ex4 from '../src/components/Ex4.vue';

test('ex4 change background color', async ({ mount }) => {
  const component = await mount(Ex4);
  await expect(component.locator('div#demo1')).toHaveCSS('background-color', 'rgb(0, 0, 255)'); // Blue background
  await expect(component.locator('button')).toHaveClass('btn btn-primary');
  await component.locator('button').click();
  await expect(component.locator('div#demo1')).toHaveCSS('background-color', 'rgb(255, 0, 0)'); // Red background
  await expect(component.locator('button')).toHaveClass('btn btn-danger');
});
