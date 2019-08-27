let assert = require("assert");
let isWeekday = require("../functions/isWeekday");



describe('isWeekday', function () {
    it('This test will return false if a day starts with "S", otherwise it will return true', function () {
        assert.equal(isWeekday("Sunday"), false);

        assert.equal(isWeekday("Saturday"), false);
    });
    it('This test will return true if a day does not start with "S", otherwise it will return false', function () {
        assert.equal(isWeekday("Monday"), true);
    });
    it('This test tests an empty string and will return true if a day does not start with "S", otherwise it will return false', function () {
        assert.equal(isWeekday(" "), true);
    });
});