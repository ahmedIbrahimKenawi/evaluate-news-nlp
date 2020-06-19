import { nplRequest } from '../client/js/nplRequest.js'


describe('Test, the function "nplRequest()" should exist' , () => {
    test('It should return true', () => {
        expect(nplRequest).toBeDefined();
    });
});

describe('Test, the function "nplRequest()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof nplRequest).toBe("function");
    });
});
