import assert from "assert";
import {isDayName} from "../Functions/isDayName.js";

describe('The isDayName function', function(){

    it('should take a string parameter and returns true if the string passed in is a day of the week.', function(){
        assert.equal(isDayName('Saturday'), true);
        assert.equal(isDayName('Monday'), true);
        assert.equal(isDayName('January'), false, 'January is not a day');
    });
});