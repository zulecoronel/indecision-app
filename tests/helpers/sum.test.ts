// sum.test.js
import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';
import { describe } from 'node:test';

test('adds 1 + 2 to equal 3', () => {

    //Preparacion
    const a = 1;
    const b = 2;
    
    //Estimulo
    const result = sum (a,b);
    
    //El comportamiento esperado
    expect(result).toBe(a + b)
    });

describe('addArray function',()=> {
test ('should return 0 if the array is empty' , () => {
    const numberArray = [0];

    const result = addArray(numberArray);
  
    expect(result).toBe(0);
});

test ('should return the proper value of the addArray function' , () => {
    const numberArray = [1,2,3,4,5];

    const result = addArray(numberArray);
  
    expect(result).toBe(15);
});

});