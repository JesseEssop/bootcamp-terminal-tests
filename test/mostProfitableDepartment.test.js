let assert = require("assert");
let mostProfitableDep = require("../functions/mostProfitableDepartment")



describe('mostProfitableDepartment test', function () {
    it('This function should return the most profitable department', function () {
        assert.equal(mostProfitableDep([
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 5500, day: 'Monday' },
        ]), 'carpentry');
    });
    it('This function should return the most profitable department', function () {
        assert.equal(mostProfitableDep([
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
        ]), 'hardware');
    });
});
