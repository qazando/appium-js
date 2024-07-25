const { remote } = require('webdriverio');

// Define as capacidades do dispositivo Android para o Appium
const iosCapabilities = {
    platformName: 'IOS',
    "automationName": "XCUITest",
    "platformVersion": "17.0",
    "app": "/Users/eduardofinotti/Documents/www/appium-js/apps/qazandoqafood.app",
    "deviceName": "teste",
}

// Define as capacidades do dispositivo Android para o Appium
const androidCapabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554', // Certifique-se de que o deviceName está correto
    'appium:appPackage': 'com.qazandoqafood',
    'appium:appActivity': '.MainActivity',
    'appium:app': '/Users/eduardofinotti/Documents/www/appium-js/apps/app-release.apk',
}

const init = (async function (type) {
    // Inicia uma sessão com o Appium
    return await remote({
        protocol: 'http',
        hostname: process.env.APPIUM_HOST || '127.0.0.1',  // Host do Appium
        port: parseInt(process.env.APPIUM_PORT, 10) || 4723,  // Porta do Appium
        path: '/wd/hub', // Certifique-se de que o path está correto
        logLevel: 'info',
        capabilities: type == 'android' ? androidCapabilities : iosCapabilities
    })
        .catch((err) => {
            console.error('Erro ao criar a sessão:', err);
            process.exit(1);
        });
});

const end = (async function (driver) {
    // Encerra a sessão
    await driver.pause(1000);
    await driver.deleteSession();
});

module.exports = {
    init,
    end
}