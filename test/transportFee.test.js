let assert = require("assert");
let transportFee = require("../functions/transportFee")



describe('transportFee test', function () {
    it('should return the right price based on the shift you are working', function () {
        assert.equal(transportFee("morning"), "R20");
        assert.equal(transportFee("afternoon"), "R10");
        assert.equal(transportFee("night"), "free");
    });
    it('This tests an empty string and should return free', function () {
        assert.equal(transportFee(" "), "free");
    });
});
