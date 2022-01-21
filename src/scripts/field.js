//           CHAPTER 3
// define variable with initial value of an empty array. 
// it will store the plants growing in the field
const plantsGrowingInFieldArray = []


// define and export a function named addPlant
// it must accept a seed object as input
// it will add the seed to the field (plantsGrowingInFieldArray)
export const addPlant = (chapterTwoSeedObject) => {
    plantsGrowingInFieldArray.push(chapterTwoSeedObject)
    console.log(plantsGrowingInFieldArray + ' this is the plantsGrowingInFieldArray')
    
}


// Define and export a function named usePlants
// that returns a copy of the array of plants.
// Be aware that when planting corn, an array of objects will be provided
// instead of a single object like all the other type of seeds. 
// Look at Array.isArray method to check if corn got passed in, or one of the others.
export const usePlants = () => {
    const plantsGrowingInFieldArrayCopy = plantsGrowingInFieldArray.map(plant => ({...plant}))
    return plantsGrowingInFieldArrayCopy
}
