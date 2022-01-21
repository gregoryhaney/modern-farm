
/* define & export a harvestPlants fn.
The harvestPlants fn must accept the plants array as input.
        i.e.: plantsGrowingInFieldArrayCopy
Iterate the array of growing plants:  plantsGrowingInFieldArrayCopy
On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns. 
For example, if the current plant is a peanut object with an output of 2,
Then the array that the function returns should have two identical objects added to it.
*/

// export const harvestPlants = (plantsGrowingInFieldArrayCopy) => {
//         const chapter5SeedObjectsArray = [] 
//                     for (const plant of plantsGrowingInFieldArrayCopy) { 
//                        // let outputPropertyValue = plant.output
//                                 for (let i = 0; i < plant.output; i++) {
//                                 chapter5SeedObjectsArray.push(plant.type)
//                                 chapter5SeedObjectsArray.push(plant.type)
//                                 }            
//                     }       
//    // The function will return an array of seed objects.
//  return chapter5SeedObjectsArray
// }


export const harvestPlants = (plantsGrowingInFieldArrayCopy) => {
    const chapter5SeedObjectsArray = [] 
               
            for (const plant of plantsGrowingInFieldArrayCopy) { 
                if (plant.type !== "Corn") {
                        for (let i = 0; i < plant.output; i++) {
                            chapter5SeedObjectsArray.push(plant)
                            chapter5SeedObjectsArray.push(plant)
                           } 
                } else {
                       // const theNewCornArray = []
                        for (let i = 0; i < cornSeedArray.length; i++) {
                            console.log("I think I'm corn")
                            chapter5SeedObjectsArray.push(plant)
                        }
                }    
            }   
// The function will return an array of seed objects.
console.log(chapter5SeedObjectsArray + " is the chapter5SeedObjectsArray")
return chapter5SeedObjectsArray
}


            
                // if (plant.type = "Corn") {
                //         for (let i = 0; i < (plant.output / 2); i++) {
                //             chapter5SeedObjectsArray.push(plant) }
                // } else 