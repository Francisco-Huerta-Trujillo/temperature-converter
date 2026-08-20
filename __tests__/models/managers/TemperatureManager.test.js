const TemperatureVO = require('../../../models/valueobjects/TemperatureVO');
const TemperatureManager = require('../../../models/managers/TemperatureManager');

describe('TemperatureManager', () => {
  test('converts 23 Celsius to Fahrenheit', () => {
    // GIVEN
    //Asignamos las variables
    const manager = TemperatureManager();
    const celsiusTemperature = new TemperatureVO(23, 'CELSIUS');

    // WHEN
    //Realizamos la operacion
    const result = manager.convert(celsiusTemperature, 'FAHRENHEIT');

    // THEN
    //Nos regresa esto
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(73.4);
    expect(result.unit).toBe('FAHRENHEIT');
  });
});