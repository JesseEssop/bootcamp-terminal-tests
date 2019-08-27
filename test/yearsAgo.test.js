let assert = require("assert");
let yearsAgo = require("../functions/yearsAgo")



describe('yearsAgo' , function(){
    it('This test takes in a year and return how many years ago that was' , function(){
        assert.equal(yearsAgo( 1977 ), 42);
        assert.equal(yearsAgo( 1975 ), 44);
        assert.equal(yearsAgo( 2020 ), -1);
    });
   
});
