export const Catalog = (harvestArray) => { 
        let div = document.querySelector('.container'); 
    for (const foodObject of harvestArray) { 
         div.innerHTML += `<section class="plant">${foodObject.type}</section>`; 
    }
}