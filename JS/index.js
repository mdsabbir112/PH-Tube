
//Fetch the Api

console.log('Enter the Main thinng ');

function mainCategories (){

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(Response => Response.json())
    .then (data => DisplayCategories(data.categories))
}

// Add a function from there 
function DisplayCategories (categories){
    console.log(categories);
}

mainCategories()