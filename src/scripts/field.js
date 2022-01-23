/*
    -Define variable with initial value of an empty array. 
        --It will store the plants growing in the field

    -Define and export a fn named addPlant
        --It must accept a seed object as input
        --It will add the seed to the field

    -Define and export a fn named usePlants
        --It will return a copy of the array of plants.
            ---Be aware: when planting corn, an array of objects
            ---will be provided instead of a single object like 
            ---all the other type of seeds. 
                ----Look at Array.isArray method to check if corn 
                ----got passed in, or one of the others.
*/

        // empty array to store plants growing in the field
const plantedPlants = []; 
export const addPlant = (seedObject) => { 
    if (Array.isArray(seedObject) === true) { 
        for (let i = 0; i < seedObject.length; i++) { 
            plantedPlants.push(seedObject[i]); 
        } 
    } else { 
        plantedPlants.push(seedObject); 
    } 
} 

export const usePlants = () => { 
    return plantedPlants; 
}