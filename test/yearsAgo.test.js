import assert from "assert";
import {sameWeekday} from "../Functions/sameWeekday.js";

describe('The sameWeekday function', function(){

    it('should take in two dates and check if both dates have the same weekday.', function(){
        assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true);
        assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);
    });
});