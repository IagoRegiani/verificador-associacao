/* eslint-disable no-console */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

console.log = () => null;
console.error = () => null;
