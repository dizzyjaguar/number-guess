
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('time to test a function', function(assert) {

    let guess = 7;
    let correctNumber = 7;
   
    const shouldBeZero = compareNumbers(guess, correctNumber);
    
    assert.equal(shouldBeZero, 0);

});

test('time to test a function', function(assert) {
    let guess = 5;
    let correctNumber = 9;
    
    const shouldBeNegOne = compareNumbers(guess, correctNumber);

    assert.equal(shouldBeNegOne, -1);
   
});

test('time to test a function', function(assert) {
    let guess = 9;
    let correctNumber = 4;
    
    const shouldBeOne = compareNumbers(guess, correctNumber);
    assert.equal(shouldBeOne, 1);
});