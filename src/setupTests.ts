// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

// 设置react和enzyme的适配器
configure({ adapter: new Adapter() });

// 配置给render挂载在global用到的dom对象
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = new JSDOM(``).window;
global.document = document;
global.window = window;