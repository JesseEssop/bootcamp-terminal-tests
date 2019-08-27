let assert = require("assert");
let allTown = require("../functions/countAllFromTown")


describe('countAllFromTown  test', function () {
    it('This test should return all the registration numbers in the string that is for that town.', function () {
        assert.equal(allTown("CL 124,CY 567,CL 345,CJ 456,CL 341", "CL"), 3);
        assert.equal(allTown("CL 124,CY 567,CL 345,CJ 456,CL 341", "CJ"), 1);
        assert.equal(allTown("CL 124,CY 567,CL 345,CJ 456,CL 341", "CY"), 1);
    });
    it('This test should return all the registration numbers in the string that is for that town.', function () {
        assert.equal(allTown("CL 124,CY 567,CL 345,CJ 456,CL 341", "CY"), 1);
    });
    it('This tests an empty string should return nothing.', function () {
        assert.equal(allTown(" ", " "), 0);
    });
});