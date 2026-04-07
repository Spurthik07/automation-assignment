import { test, expect } from '@playwright/test';

test('API Test - Get Users', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.length).toBeGreaterThan(0);
  expect(data[0]).toHaveProperty('name');

});