import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // toBe no funcionaria, porque seria algo como {} == {}
    // y eso da falso, son direcciones de memoria diferentes
    // por eso para tener el === tiene q ser toStrictEqual()
    expect(user).toStrictEqual(userTest);
  });

  test("getUserActivo tiene que retornar un objeto ", () => {
    const name = "Matias";
    const userTest = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual(userTest);
  });
});
