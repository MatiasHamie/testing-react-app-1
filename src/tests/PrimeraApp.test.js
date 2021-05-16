// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme"; // shallow == render pero mas comodo para probar componentes React

// para probar componentes tiene que existir el src/setupTests.js
describe("Pruebas en <PrimeraApp />", () => {
  //testing con jest (USAR ENZYME, NO JEST)
  //   test("Debe mostrar el mensaje Hola Mundo", () => {
  //     const saludo = "Hola Mundo";
  // componente renderizado
  //     const wrapper = render(<PrimeraApp saludo={saludo} />);
  //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Probando saludo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    //toMatchSnapshot() saca una 'foto' de como esta el componente actualmente, contando todo, espacios, etc.
    // y si ALGO es diferente, tira error, si esa nueva diferencia esta bien, actualizar el snapshot con 'u'
    // esa 'u' te aparece en el mensaje de error del test en la terminal
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Probando saludo";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    // Lo que tenemos q hacer es ver que necesitamos analizar,
    // en este caso es, que en un parrafo esté el subtitulo que yo mando
    // entonces busco en el wrapper (que seria el componente entero) un parrafo q contenga el subtitulo
    // .find() es igual al document.querySelector()
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
