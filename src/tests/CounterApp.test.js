import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme"; // shallow == render pero mas comodo para probar componentes React
import CounterApp from "../CounterApp";

describe("Pruebas sobre CounterApp", () => {
  // A debatir si es buena práctica o no por 'repetir codigo',
  // pero si no inicializo en este scope 'global' al wrapper
  // por defecto es undefined, por ende no tengo el intellisense en cada
  // test, asi q lo inicializo aca y piso en cada beforeEach

  // let wrapper;
  let wrapper = shallow(<CounterApp />); //Por defecto inicializa un valor en 10

  // Esto se ejecuta antes de cada test
  // lo q estoy haciendo es volver a pseudo renderizar, para q
  // el valor que siempre comienza por defecto en 10, se haga antes
  // de cada test
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de renderizar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar el valor por defecto de 100", () => {
    const nuevoValor = 100;
    const wrapper = shallow(<CounterApp value={nuevoValor} />);
    const valorModificado = wrapper.find("h2").text().trim(); //trim para sacarle los espacios

    expect(valorModificado).toBe(nuevoValor.toString());
  });

  // Se podria poner un ID a cada boton, pero esto es para ver como seria
  // si tenes n botones el at(0) es como el [0]
  test("Debe incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click"); //hago un click
    const valorModificado = wrapper.find("h2").text().trim();

    expect(valorModificado).toBe("11");
  });

  test("Debe decrementar con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click"); //hago un click
    const valorModificado = wrapper.find("h2").text().trim();

    expect(valorModificado).toBe("9");
  });

  test("Debe poner el valor por defecto con el boton reset", () => {
    const nuevoValor = 100;
    const wrapper = shallow(<CounterApp value={nuevoValor} />);

    wrapper.find("button").at(0).simulate("click"); //hago un click para modificar el valor por defecto
    wrapper.find("button").at(1).simulate("click"); //hago un click en el reset
    const valorModificado = wrapper.find("h2").text().trim();

    expect(valorModificado).toBe((nuevoValor).toString());
  });
});
