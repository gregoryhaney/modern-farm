/* 
     -Define and export a plantSeeds fn.
        -- fn must accept the year's planting plan as input 
        -- the plan is an array and contains four arrays 
        -- representing the rows in the field to be plants. 
            --- Determine how to iterate the parent array and child arrays.
            --- As you iterate the row of food types to be planted, 
            --- invoke the corresponding factory fn 
                ---- (e.g.: if food type is "Asparagus", invoke 
                ---- the createAsparagus fn to get an asparagus seed).
                ---- take that seed & add it to the array of plants in the field module.
*/

import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js" 
import { createCorn } from "./seeds/corn.js" 
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => { 
    for (const season of yearlyPlan) { 
        for (let i = 0; i < season.length; i++) { 
            if (season[i] === "Asparagus") { 
                addPlant(createAsparagus()) 
            } 
            if (season[i] === "Potato") { 
                addPlant(createPotato()) 
            } 
            if (season[i] === "Corn") { 
                addPlant(createCorn()) 
            } 
            if (season[i] === "Soybean") { 
                addPlant(createSoybean()) 
            } 
            if (season[i] === "Sunflower") { 
                addPlant(createSunflower()) 
            } 
            if (season[i] === "Wheat") { 
                addPlant(createWheat()) 
            } 
        } 
    } 
}