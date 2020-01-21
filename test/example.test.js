// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;
QUnit.module('checkResult');

//player wins with scissors
test('scissors beats paper', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

//player wins with paper
test('paper beats rock', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

//player wins with rock
test('rock beats scissors', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

// a draw with both rocks
test('both play rock is a draw', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

// a draw with both scissors
test('both play scissors is a draw', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

// a draw with both paper
test('both play paper is a draw', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

//computer wins with scissors
test('computer scissors beats paper', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

//computer wins with paper
test('computer paper beats rock', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

//computer wins with rock
test('computer rock beats scissors', assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});