// Para tener el autocompletado
import '@testing-library/jest-dom'

describe("Pruebas en el archivo demo.test.js", () => {
  test("deben de ser iguales los strings", () => {
    // Arrange
    const mensaje = "Hola Mundo";

    // Act
    const mensaje2 = `Hola Mundo`;

    // Assert
    expect(mensaje).toBe(mensaje2); // mensaje === mensaje2
  });

  //test2

  //test3 y asi sucesivamenteD
});
