export function kmToMeters(numberKM) {

    if (typeof numberKM !== 'number' || numberKM < 0) {

        throw new Error('the km have to be number upon 0')
    
    }

    return numberKM * 1000

}




