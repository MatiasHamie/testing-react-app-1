import "@testing-library/jest-dom";
import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo tiene que retornar Hola Matias", () => {
    const nombre = "Matias";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo tiene que retornar Hola Carlos", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
