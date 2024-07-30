import assert from "assert";
import {countRegNumber} from "../Functions/regCount.js";

describe('The countRegNumber function', function(){

    it('that takes in a string parameter that looks like this CA 182736,CY 523519,CJ 812328 and returns the number of registration numbers in the string. It should also work for this string CA 42665, AA 12 RT GP', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});