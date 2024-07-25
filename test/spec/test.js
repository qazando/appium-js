const assert = require('assert');
const { end, init } = require('../../config');

const settings_page = require('../pages/settings_page')

describe('Appium Mocha Test', function () {

  let driver;

  beforeEach(async function () {
    driver = await init(process.env.PLATFORM);
  });

  after(async function () {
    await end(driver)
  });

  it('should open battery settings', async function () {
    await driver.$('//*[@resource-id="email"]').setValue('teste@teste.com');
    await driver.$('//*[@resource-id="password"]').setValue('123456');
    await driver.$('//*[@text="ENTRAR"]').click()

    const elemento = await driver.$('//android.widget.TextView[@text="Selecione seu endereço..."]')
    assert(elemento, 'Elemento não encontrado');
  });

  it('should open battery settings', async function () {
    settings_page.clickBatery();
  });

  // it('should open battery settings 2', async function () {
  //   // Localiza o elemento "Battery" na tela
  //   const batteryItem = await driver.$('//*[@text="Battery"]');
  //   // Verifica se o elemento foi encontrado
  //   assert(batteryItem, 'Battery item not found');
  //   assert.equal(batteryItem, 'Battery');
  //   // Clica no item "Battery"
  //   await batteryItem.click();
  // });

  // it('should open battery settings 3', async function () {
  //   // Localiza o elemento "Battery" na tela
  //   const batteryItem = await driver.$('//*[@text="Battery"]');
  //   // Verifica se o elemento foi encontrado
  //   assert(batteryItem, 'Battery item not found');
  //   // Clica no item "Battery"
  //   await batteryItem.click();
  // });
});
