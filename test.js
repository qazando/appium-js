const { remote } = require('webdriverio');
const assert = require('assert');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554', // Certifique-se de que o deviceName está correto
  'appium:appPackage': 'com.qazandoqafood',
  'appium:appActivity': '.MainActivity',
  'appium:app': '/Users/eduardofinotti/Documents/www/appium-js/apps/app-release.apk',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  path: '/wd/hub', // Certifique-se de que o path está correto
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {

    await driver.$('//*[@resource-id="email"]').setValue('teste@teste.com');
    await driver.$('//*[@resource-id="password"]').setValue('123456');
    await driver.$('//*[@text="ENTRAR"]').click()

    const elemento = await driver.$('//android.widget.TextView[@text="Selecione seu endereço..."]')
    assert(elemento, 'Elemento não encontrado');

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);