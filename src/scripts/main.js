console.log("Welcome to the main module")
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

//   CHAPTER 3

