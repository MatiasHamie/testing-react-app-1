// Instalar todo esto
// npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 enzyme-to-json enzyme @testing-library/react-hooks

// import "@testing-library/jest-dom/extend-expect";

// sacado de 
// Enzyme (ojo, solo para version <16 de React) https://github.com/wojtekmaj/enzyme-adapter-react-17
// Enzyme para React version >17 https://github.com/wojtekmaj/enzyme-adapter-react-17
// Para los snapshots de wrappers instalar https://www.npmjs.com/package/enzyme-to-json

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
