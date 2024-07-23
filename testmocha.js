const { remote } = require('webdriverio');
const assert = require('assert');

// Define as capacidades do dispositivo Android para o Appium
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554', // Certifique-se de que o deviceName está correto
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};

// Configurações do WebdriverIO
const wdOpts = {
  protocol: 'http',
  hostname: process.env.APPIUM_HOST || 'localhost',  // Host do Appium
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,  // Porta do Appium
  path: '/wd/hub', // Certifique-se de que o path está correto
  logLevel: 'info',
  capabilities,
};

describe('Appium Mocha Test', function() {
  this.timeout(30000); // Ajuste o timeout para o tempo necessário para o Appium

  let driver;

  before(async function() {
    // Inicia uma sessão com o Appium
    driver = await remote(wdOpts).catch((err) => {
      console.error('Erro ao criar a sessão:', err);
      process.exit(1);
    });
  });

  after(async function() {
    // Encerra a sessão
    await driver.pause(1000);
    await driver.deleteSession();
  });

  it('should open battery settings', async function() {
    // Localiza o elemento "Battery" na tela
    const batteryItem = await driver.$('//*[@text="Battery"]');
    // Verifica se o elemento foi encontrado
    assert(batteryItem, 'Battery item not found');
    // Clica no item "Battery"
    await batteryItem.click();
  });

  it('should open battery settings 2', async function() {
    // Localiza o elemento "Battery" na tela
    const batteryItem = await driver.$('//*[@text="Battery"]');
    // Verifica se o elemento foi encontrado
    assert(batteryItem, 'Battery item not found');
    // Clica no item "Battery"
    await batteryItem.click();
  });

  it('should open battery settings 3', async function() {
    // Localiza o elemento "Battery" na tela
    const batteryItem = await driver.$('//*[@text="Battery"]');
    // Verifica se o elemento foi encontrado
    assert(batteryItem, 'Battery item not found');
    // Clica no item "Battery"
    await batteryItem.click();
  });
});
