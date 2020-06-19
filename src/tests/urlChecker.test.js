import {checkForUrl} from '../client/js/urlChecker.js'

describe('Test, the function "checkForUrl()" should exist' , () => {
    test('It should return true',  () => {
        expect(checkForUrl).toBeDefined();
    });
});

describe('Test, the function "checkForUrl()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof checkForUrl).toBe("function");
    });
});

describe('Test, the function "checkForUrl()" for valid url' , () => {
    var url = "https://www.youtube.com/";
    test('It should return true',  () => {
        const response = checkForUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});

describe('Test "checkForUrl()" for invalid url' , () => {
    var url = "htpshttps://www.google.com/";
    test('It should return false',  () => {
        const response = checkForUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});

