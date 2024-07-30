import assert from "assert";
import {isFromBellville} from "../Functions/isFromBellville.js";

describe('The isFromBellville function', function(){

    it('should tell if the registration is from Bellville', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});

