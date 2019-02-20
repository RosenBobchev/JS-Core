const assert = require('chai').assert;
const isOddOrEven = require('./02. Even Or Odd');

describe('isOddOrEven', function () {
    it('if parameter is different than string should return undefined', function () {
        assert.isUndefined(isOddOrEven(1));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
        assert.isUndefined(isOddOrEven(null));
    });
    
    it('should return even if input length is even', function () {
        assert.equal(isOddOrEven('even'), 'even')
    });

    it('should return odd if input length is odd', function () {
        assert.equal(isOddOrEven('odd'), 'odd')
    });
});