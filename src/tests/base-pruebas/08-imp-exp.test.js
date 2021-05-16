import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en Funciones de Heroes", () => {
  test("getHeroesById tiene que retornar un heroe por ID", () => {
    const id = 1;

    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("getHeroesById tiene que retornar undefined si el heroe no existe", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    // undefined es primitivo, asi q puedo usar toBe()
    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner tiene que retornar un array con 2 heroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroes).toEqual(heroesData);
    expect(heroes.length).toBe(2);
  });
});
