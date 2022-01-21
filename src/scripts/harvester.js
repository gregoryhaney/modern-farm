
/* define & export a harvestPlants fn.
The harvestPlants fn must accept the plants array as input.
        i.e.: plantsGrowingInFieldArrayCopy

Iterate the array of growing plants:  plantsGrowingInFieldArrayCopy
On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns. 
For example, if the current plant is a peanut object with an output of 2,
Then the array that the function returns should have two identical objects added to it.
*/


export const harvestPlants = (plantsGrowingInFieldArrayCopy) => {
        const chapter5SeedObjectsArray = []
        const outputPropertyValue = ""
            for (let i = 0; i < plantsGrowingInFieldArrayCopy.output; i++) {               
                console.log(plantsGrowingInFieldArrayCopy[i])
                const outputPropertyValue = plantsGrowingInFieldArrayCopy[i].output
                console.log(outputPropertyValue)

            }
   //     }

// The function will return an array of seed objects.

 // return chapter5SeedObjectsArray
}





