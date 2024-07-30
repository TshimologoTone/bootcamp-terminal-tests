import assert from "assert";
import {getDay} from "../Functions/getDay.js";

describe('The getDay function', function(){

    it('should find out which day of the week a specific date was. It should return the day of the week string', function(){
        assert.equal(getDay('2010-04-01'), "Thursday");
        assert.equal(getDay('2012-02-13'), "Monday");
    });
});