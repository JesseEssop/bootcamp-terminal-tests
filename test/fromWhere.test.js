let assert = require("assert");
let fromWhere = require("../functions/fromWhere");


describe('fromWhere test', function () {
    it('This test that takes a car registration number as a parameter and returns the town the car is from', function () {
        assert.equal(fromWhere("CY"), "Bellville");
        assert.equal(fromWhere("CA"), "Cape Town");
        assert.equal(fromWhere("CJ"), "Paarl");
    });
    it('This test that takes a car registration number as a parameter and returns the town the car is from', function () {
        assert.equal(fromWhere(" "), "Some other place!");
        assert.equal(fromWhere("CA"), "Cape Town");
    });
});