export function caloriesBurned(weightInKg, distanceInKm) {

    if (typeof weightInKg !== 'number' || typeof distanceInKm !== 'number') {

        throw new Error("the weight and distance must be a number");
        
    }

    if (weightInKg <= 0 || distanceInKm <= 0) {

        throw new Error("the weight and distance must be greater than 0");
        
    }

    return weightInKg * distanceInKm * 1.036

}