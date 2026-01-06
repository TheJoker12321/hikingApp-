import express from 'express'
import { isSafeToHike } from '../hiking-utils/safeToHike.js'


const route = express.Router()


route.post('/check-weather', (req, res) => {

    const { temperature, windSpeed } = req.body
    const result = isSafeToHike(temperature, windSpeed)

    return res.status(201).json(
        result
    )

})

export { route }

