import assert from "assert";
import {isFromGauteng} from "../Functions/isFromGauteng.js";

describe('The isFromGauteng function', function(){

    it('should tell if the registration is from Gauteng', function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });
});