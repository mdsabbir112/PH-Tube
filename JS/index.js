//Fetch the Api

function mainCategories (){
    //Api Request 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //get the Response / promise into json format
    .then(Response => Response.json())
    // get the data and call the function with parameter
    .then (data => DisplayCategories(data.categories))
}

// Add a function from there 
function DisplayCategories (categories){
    console.log(categories);
    // get the section/DIV Id from the index.html
    const CategorieData = document.getElementById("CategoryData");
    //Run For Off Loop
    for(let Cat of categories) {
        console.log(Cat);

        /**
         * {category_id: '1001', category: 'Music'}
         */

    //create an Elements
    let CategoriesDiv = document.createElement("div");
    CategoriesDiv.innerHTML = `
         <button class="btn btn-soft hover:bg-[#FF1F3D] hover:text-white text-lg font-semibold">${Cat.category}</button>
    `
    //Append the child variable 
    CategorieData.append(CategoriesDiv);
    }
 
    
}

mainCategories()