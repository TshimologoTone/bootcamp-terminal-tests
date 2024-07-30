import assert from "assert";
import {isFromLimpopo} from "../Functions/isFromLimpopo.js";

describe('The isFromLimpopo function', function(){

    it('should tell if the registration is from Limpopo', function(){
        assert.equal(isFromLimpopo('KTR 990 L'), true);
        assert.equal(isFromLimpopo('W 990 N'), false);
    });
});