import test, { before, after } from 'node:test'
import assert from 'node:assert/strict'
import { app } from '../../app.js';


let server;


before(() => {
    
    server = app.listen(3000);

});


after(() => {

    server.close();

});


test('test on check endpoint', async () => {
    assert.deepEqual( await checkFetch(), {

            safe: true,
            message: 'All conditions are good for hiking!'
        
        }

    )

})



async function checkFetch() {

    const res = await fetch('http://localhost:3000/check-weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                    temperature: 35,
                    windSpeed: 50,

                })

            })

        return await res.json() 
}