let assert = require("assert");
let itemsOver = require("../functions/findItemsOver")



describe('findItemsOver test', function () {
    it('The function should return products that have quantity higher than the threshold.', function () {
        assert.deepEqual(itemsOver([
            { name: 'pears', qty: 3 },
            { name: 'bananas', qty: 27 },
        ], 25), [
                { name: 'bananas', qty: 27 }
            ]);
    });
    it('The function should return no products because none are over the threshold amount.', function () {
        assert.deepEqual(itemsOver([
            { name: 'pears', qty: 3 },
            { name: 'bananas', qty: 27 },
        ], 30), []);
    });
});