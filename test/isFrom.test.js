import assert from "assert";
import {isFrom} from "../Functions/isFrom.js";

describe('The isFrom function', function(){

    it('should tell if the registration is from which town', function(){
        var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true
        var fromBellville = isFrom('CJ 98912', 'CY'); //returns false
        
        assert.equal(fromPaarl, true, 'Should be from Paarl');
        assert.equal(fromBellville, false, 'Should be from Bellville - starting with CY');
    });
});
