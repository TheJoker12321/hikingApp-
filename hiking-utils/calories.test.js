import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import { caloriesBurned } from './calories.js'


describe('Function: caloriesBurned',

    test('check the function in regular example', () => {
        
        assert.equal(caloriesBurned(70, 5), 362.6)
    }),

    test('check the function with zero value', () => {

        assert.throws(() => {

            caloriesBurned(0, 0), 0

        })

    }),

    test('check the function with a decimal distance', () => {

        assert.equal(caloriesBurned(70, 3.5), 253.82000000000002)

    })

)