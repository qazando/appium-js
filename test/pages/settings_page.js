const btnXPTO = {
    android: '//android.widget.Button[@text="XPTO"]',
    ios: '//XCUIElementTypeButton[@name="XPTO"]'
}

const clickBatery = async () => {
    // Localiza o elemento "Battery" na tela
    // const batteryItem = await driver.$('//*[@text="Battery"]');
    const batteryItem = await driver.$(btnXPTO[process.env.PLATFORM]);
    // Verifica se o elemento foi encontrado
    assert(batteryItem, 'Battery item not found');
    // Clica no item "Battery"
    await batteryItem.click();
}

module.exports = {
    clickBatery
}