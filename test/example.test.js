// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    // test for equal
    let guess = 7;
    let correctNumber = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    compareNumbers(guess, correctNumber);
    console.log(compareNumbers(guess, correctNumber));
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guess, correctNumber);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    // test for too low
    let guess = 5;
    let correctNumber = 9;
    //Act 
    // Call the function you're testing and set the result to a const
    compareNumbers(guess, correctNumber);
    console.log(compareNumbers(guess, correctNumber));
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guess + 4, correctNumber);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    // test for too high
    let guess = 9;
    let correctNumber = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    compareNumbers(guess - 5, correctNumber);
    console.log(compareNumbers(guess, correctNumber));
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guess, correctNumber);
});