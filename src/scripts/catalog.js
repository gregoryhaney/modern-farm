
export const catalog = (harvestedFoodArray) => {       
           for (const food of harvestedFoodArray) {         
                    if (food.type === "Asparagus") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    } else if (food.type === "Corn") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    } else if (food.type === "Sunflower") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    } else if (food.type === "Soybean") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    } else if (food.type === "Wheat") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    } else if (food.type === "Potato") {
                        let plantStringForHTML = `<section class='plant'>${food.type}</section>`
                        console.log(plantStringForHTML)
                        document.querySelector(".container").innerHTML += plantStringForHTML
                    }
            }
        }