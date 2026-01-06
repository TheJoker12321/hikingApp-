import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import { isSafeToHike } from './safeToHike.js'


describe('Function: isSafeToHike', 

    test('check the function wuth a regular value', () => {
        assert.deepEqual(isSafeToHike(25, 15), {

            "safe": true, 
            "message": "All conditions are good for hiking!"

        })

    }),

    test('check the func with wind greater than 50', () => {

        assert.deepEqual(isSafeToHike(25, 51), {

            "safe": false, 
            "message": "Too windy to hike!"

        })

    }),

    test('check the func with temp smaller than 0', () => {

        assert.deepEqual(isSafeToHike(-1, 15), {

            "safe": false, 
            "message": "Too windy to hike!"

        })

    })

)