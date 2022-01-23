import { createPlan } from "./plan.js" 
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js" 
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js" 
import { createWheat } from "./seeds/wheat.js" 
import { plantSeeds } from "./tractor.js" 
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js" 
import { Catalog } from "./catalog.js" 


// create the seed objects for each of the plant types 
// Project Chapter 2 requirements
const asparagusSeed = createAsparagus() 
console.log(asparagusSeed) 

const potatoSeed = createPotato() 
console.log(potatoSeed)

const cornSeed = createCorn() 
console.log(cornSeed) 

const soybeanSeed = createSoybean() 
console.log(soybeanSeed) 

const sunflowerSeed = createSunflower() 
console.log(sunflowerSeed) 

const wheatSeed = createWheat() 
console.log(wheatSeed) 


// create plan the yearly planting plan
const yearlyPlan = createPlan()
console.log(yearlyPlan)


// add plants to plantedPlants array 
let plantedPlants = usePlants()
console.log(plantedPlants)

// sow the field 
// Project Chapter 4 requirements
plantSeeds(yearlyPlan)
console.log(usePlants())

// harvest the crops 
// Project Chapter 5 requirements
const myHarvest = harvestPlants(usePlants()); 
console.log(myHarvest)

// sell the harvested crops 
// Project Chapter 6 requirements
Catalog(myHarvest)