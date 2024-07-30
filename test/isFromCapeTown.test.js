import assert from "assert";
import {isFromCapeTown} from "../Functions/isFromCapeTown.js";

describe('The isFromCapeTown function', function(){

    it('should tell if the registration is from CapeTown', function(){
        assert.equal(isFromCapeTown('CA 123 908'), true);
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });
});