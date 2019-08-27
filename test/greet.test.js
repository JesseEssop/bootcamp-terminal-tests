let assert = require("assert");
let greet = require("../functions/greet");


describe('greet test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(greet("Jesse"),"Hello, Jesse" );
        assert.equal(greet("Steve"),"Hello, Steve" );
        assert.equal(greet("Josh"),"Hello, Josh" );
    });

});
