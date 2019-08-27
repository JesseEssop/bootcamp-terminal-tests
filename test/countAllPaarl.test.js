let assert = require("assert");
let allPaarl = require("../functions/countAllPaarl")


describe('countAllPaarl', function () {
    it('This test takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.', function () {
        assert.equal(allPaarl("CJ345123, CJ2345, CL123-546, CK345, CJ123"), 3);
        assert.equal(allPaarl("CJ345123, CY2345, CL123-546, CK345, CA123"), 1);
        assert.equal(allPaarl("CJ345123, CJ2345, CJ123-546, CK345, CJ123"), 4);
    });
    it('This test an empty parameter string with registration numbers and one with no plates from Paarl separated with commas.', function () {
        assert.equal(allPaarl("CJ345123, CJ2345, CL123-546, CK345, CA323"), 2);
        assert.equal(allPaarl(" "), 0);
    });
});
