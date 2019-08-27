let assert = require("assert");
let fromBellville = require("../functions/isFromBellville");

describe('isFromBellville test', function () {
    it('This test returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(fromBellville("CY 3545"), true);
        assert.equal(fromBellville("CA 7966 "), false);
    });
    it('This test returns false if a registration number is not from Bellville otherwise returns true. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(fromBellville("CL 3545"), false);
        assert.equal(fromBellville("CA 8690 "), false);
    });
    it('This test returns false if the string is empty. Registration numbers for Bellville starts with CY.', function () {
        assert.equal(fromBellville(" "), false);
    });
});