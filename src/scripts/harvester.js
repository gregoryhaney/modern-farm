
/* 
    -Define & export a harvestPlants fn.
        --The harvestPlants fn must accept the plants array as input.
            
    -Iterate the array of growing plants.
        --On each plant, get the value of the output property.
        --Add that many of the plant objects to the array that the fn returns. 
            ---E.g.: if current plant is peanut object with  output of 2,
            ---the array that the fn returns should have two identical objects added to it.
*/

export const harvestPlants = (plantsArray) => { 
    const seedObjectArray = []; 
        for (const plant of plantsArray) { 
             let plantOutput = plant.output 
                if (plant.type === "Corn") { 
                    let cornSaleOutput = (plantOutput / 2) 
                        for (let x = 0; x < cornSaleOutput; x++) { 
                            seedObjectArray.push(plant) 
                        } 
                } else { 
                        for (let i = 0; i < plantOutput; i++) { 
                            seedObjectArray.push(plant) 
                        } 
                } 
    } 
    return seedObjectArray 
}