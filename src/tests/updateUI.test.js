import {
    displayResult,
    sendMessage,
    disableBtn,
    enableBtn
} from '../client/js/updateUI.js'


describe('Test, the function "displayResult()" should exist' , () => {
    test('It should return true', () => {
        expect(displayResult).toBeDefined();
    });
});

describe('Test, the function "displayResult()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof displayResult).toBe("function");
    });
});

describe('Test, the function "sendMessage()" should exist' , () => {
    test('It should return true', () => {
        expect(sendMessage).toBeDefined();
    });
});

describe('Test, the function "sendMessage()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof sendMessage).toBe("function");
    });
});

describe('Test, the function "disableBtn()" should exist' , () => {
    test('It should return true', () => {
        expect(disableBtn).toBeDefined();
    });
});

describe('Test, the function "disableBtn()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof disableBtn).toBe("function");
    });
});

describe('Test, the function "enableBtn()" should exist' , () => {
    test('It should return true', () => {
        expect(enableBtn).toBeDefined();
    });
});

describe('Test, the function "enableBtn()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof enableBtn).toBe("function");
    });
});
