let assert = require("assert");
let itemsOver20 = require("../functions/findItemsOver20")


describe('findItemsOver20 test', function () {
    it('This test should return all the products that have a quantity higher than 20.', function () {
        assert.deepEqual(itemsOver20([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ]), [{ name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27 }]);
    });
    it('This test should return nothing becuase none of the items are over 20.', function () {
        assert.deepEqual(itemsOver20([
            { name: 'apples', qty: 10 },

            { name: 'apples', qty: 3 },
        ]), []);
    });
});