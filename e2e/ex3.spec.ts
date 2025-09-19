import { test, expect } from '@playwright/experimental-ct-vue';
import Ex3 from '../src/components/Ex3.vue'

test('ex3', async ({ mount }) => {
  const component = await mount(Ex3);
  await component.getByRole('combobox').selectOption('Email login');
  await expect(component.locator('div label')).toHaveText('Email');
  await component.locator('select').selectOption('Username login');
  await expect(component.locator('div label')).toHaveText('Username');
});

