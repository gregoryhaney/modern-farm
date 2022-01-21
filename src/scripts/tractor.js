
import { addPlant } from "./field.js"
import { createCorn } from './seeds/corn.js'
import { createSoybean } from './seeds/soybean.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createSunflower } from './seeds/sunflower.js'
import { createPotato } from './seeds/potato.js'
import { createWheat } from './seeds/wheat.js'
import { usePlants } from './field.js'


// define and export a plantSeeds function.
// The function must accept the year's planting plan as input

// The plan is an array. It contains 4 arrays representing 
// the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, 
// invoke the corresponding factory function 
// (e.g. if the food type is "Asparagus", invoke 
// the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.

export const plantSeeds = (yearlyPlan) => {
    const seederInfo = []
        for (const plan of yearlyPlan) {
            for ( const crop of plan) {
                    if (crop === "Wheat") {
                        const wheatSeed = createWheat()
                        seederInfo.push(wheatSeed)
                     } else if (crop === "Potato") {
                        const potatoSeed = createPotato()
                        seederInfo.push(potatoSeed)
                    } else if (crop === "Asparagus") {
                        const asparagusSeed = createAsparagus()
                        seederInfo.push(asparagusSeed)   
                    } else if (crop === "Soybean") {
                        const soybeanSeed = createSoybean()
                        seederInfo.push(soybeanSeed)
                    } else if (crop === "Sunflower") {
                        const sunflowerSeed = createSunflower()
                        seederInfo.push(sunflowerSeed)
                    } else {
                        const cornSeed = createCorn()
                        seederInfo.push(cornSeed)
                    }
             }
         }
         return seederInfo
     }  