const assert = require('chai').assert;
const lookupChar  = require('./03. Char Lookup');

describe('lookupChar ', function () {
    it('if parameters are different than string and int should return undefined', function () {
        assert.isUndefined(lookupChar (0, 0));
        assert.isUndefined(lookupChar ([], 0));
        assert.isUndefined(lookupChar ({}, 0));
        assert.isUndefined(lookupChar (null, 0));
        assert.isUndefined(lookupChar ('str', []));
        assert.isUndefined(lookupChar ('str', {}));
        assert.isUndefined(lookupChar ('str', 'str'));
        assert.isUndefined(lookupChar ('str', null));
        assert.isUndefined(lookupChar ('str', 1.14));
        assert.isUndefined(lookupChar(undefined, 0));
        assert.isUndefined(lookupChar('str', undefined));
    });

    it('should return message if index is out of range', function () {
        let string = 'string';
        assert.equal(lookupChar (string, string.length), 'Incorrect index');
        assert.equal(lookupChar (string, -1), 'Incorrect index');
    });

    it('should return message if index is zero or less', function () {
        let string = 'string';
        assert.equal(lookupChar (string, -1), 'Incorrect index');
        assert.equal(lookupChar ('', 0), 'Incorrect index');
    });

    it('have to return correct result', function () {
        let string = 'string';
        assert.equal(lookupChar(string, 0), 's');
        assert.equal(lookupChar(string, string.length - 1), 'g');
    });
});
