import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import { kmToMeters } from './distanceUtils.js'

describe('Function: kmToMeters', 
    test('check the function with regular value', () => {

        assert.equal(kmToMeters(2), 2000)
    
    }),

    test('from km to meter test drop error', () => {

        assert.throws(() => {

            kmToMeters("2", 2000)

        })

    }),

    test('check 0 km what the output', () => {

        assert.equal(kmToMeters(0), 0)
    
    })

)