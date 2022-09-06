const { reloadApp } = require('detox-expo-helpers');

jest.setTimeout(120000);

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
    // sleep so app can boot
    await sleep(10000);
  });

  test('2 text nodes', async() => {
    await expect(element(by.id("Text1"))).toBeVisible();
    await expect(element(by.id("Text2"))).toBeVisible();
 });

  /*it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });*/
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}