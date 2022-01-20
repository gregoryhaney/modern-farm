// console.log("Welcome to the main module")


//      CHAPTER 1 
// import the createPlan() fn from plan.js
// invoke the createPlan() fn
// the createPlan() fn returns a value that 
//   will be stored in a variable: yearlyPlan

import { createPlan } from './plan.js'
    const yearlyPlan = createPlan()
    console.log(yearlyPlan)

//       END CHAPTER 1


/*       CHAPTER 2
      TEST CODE HERE WORKS
Write some temporary, test code to invoke 
some of your seed creation functions that 
you defined in your modules and use 
console.log() to ensure that you get the right value back.
import { createAsparagus } from './seeds/asparagus.js'
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from './seeds/corn.js'
const cornSeed = createCorn()
console.log(cornSeed)

     END CHAPTER 2
*/

/*           CHAPTER 3
         TEST CODE HERE WORKS

Write some temporary test code in the main module to check if your functions do their job correctly.

Create a seed object.
Invoke addPlant() and specify the seed object as the argument.
Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.


import { createCorn } from './seeds/corn.js'
    const cornSeed = createCorn()
    console.log(cornSeed)

import { addPlant } from './field.js'
    const checkAddPlant = addPlant(cornSeed)

import { usePlants } from './field.js'
    const checkUsePlants = usePlants()

console.log(checkUsePlants)


    END CHAPTER 3
*/


/*      CHAPTER 4
invoke the function that plants all of the seeds, 
and then get the plants array from the fields.js module. 
Then use console.log() to see if the plants array 
has been populated correctly.

*/

// import { createCorn } from './seeds/corn.js'
// import { createSoybean } from './seeds/soybean.js'
// import { createAsparagus } from './seeds/asparagus.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createPotato } from './seeds/potato.js'
// import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
   


import { plantSeeds } from './tractor.js'
    const seedPlanter = plantSeeds(yearlyPlan)

import { usePlants } from './field.js'
    const thePlantsArray = usePlants()   
    // show the value of the plants array: plantsGrowingInFieldArrayCopy 
    console.log(thePlantsArray + " is the value of the plantsGrowingInFieldArray")   