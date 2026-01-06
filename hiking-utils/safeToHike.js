export function isSafeToHike(temperature, windSpeed) {

    if (temperature <= 35 && temperature >= 0 && windSpeed <= 60) {

        return {

            "safe": true, 
            "message": "All conditions are good for hiking!"
        
        }  

    } else {

        return {

            "safe": false, 
            "message": "Too windy to hike!"

        }

    }

}