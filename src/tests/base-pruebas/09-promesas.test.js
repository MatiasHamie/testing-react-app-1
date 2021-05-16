import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  // Por defecto las pruebas son sincronas, por ende esto no funcionaria
  // test("getHeroeByIdAsync debe retornar un Héroe async", () => {
  //   const id = 1;

  // va a dar verdadero
  // getHeroeByIdAsync(id).then((heroe) => {
  //   expect(true).toBe(false);
  // });
  // });

  // Para que funcione, tenemos q pasarle como parametro al callback un done
  // lo que hace es, decirle al test q TIENE q probar asincronia
  test("getHeroeByIdAsync debe retornar un Héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done(); // aca digo q terminó la prueba
    });
  });

  test("getHeroeByIdAsync debe retornar un error si el héroe por id no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
