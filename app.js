import express from 'express'
import { route } from './routes/hiking-routes.js'


const app = express()
app.use(express.json())
app.use('/', route)




// app.listen(3000, () => {

//     console.log('start running server on port: http://localhost:3000');
    
// })

export { app }
