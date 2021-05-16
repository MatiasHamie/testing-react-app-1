import "@testing-library/jest-dom";
import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas con async-await y Fetch", () => {
  test("getImagen debe retornar la URL de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("http://")).toBe(true);
  });
});
