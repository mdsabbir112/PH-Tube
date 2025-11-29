//Fetch the Api

function mainCategories (){
    //Api Request 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //get the Response / promise into json format
    .then(Response => Response.json())
    // get the data and call the function with parameter
    .then (data => loadCategories(data.categories))
}


// For accept the id 
function loadCategoryVideos(id){
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}` ;
    console.log(url);
}

// Add a function from there 
function loadCategories (categories){
   
    // get the section/DIV Id from the index.html
    const CategorieData = document.getElementById("CategoryData");
    
    //Run For Off Loop
    for(let Cat of categories) {
        // console.log(Cat);

        /**
         * {
         *      category_id: '1001', 
         *      category: 'Music'
         * }
         */

    //create an Elements
    let CategoriesDiv = document.createElement("div");
    CategoriesDiv.innerHTML = `
         <button onclick = loadCategoryVideos(${Cat.category_id}) class="btn btn-soft hover:bg-[#FF1F3D] hover:text-white text-lg font-semibold">${Cat.category}</button>
    `
    //Append the child variable 
    CategorieData.append(CategoriesDiv);
    }  
}

// Load the Video card for show the Video

async function mainVideo(){
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");

    let data = await response.json();
    loadVideo(data.videos);
}


function loadVideo (videos) {
     console.log(videos);

    const displyVideo = document.getElementById("showVideo") ;

    // USe FOR each for loop the Array
    videos.forEach(function(video){
        // console.log(video);
        const div = document.createElement("div");

        /**
         * {category_id: '1001', 
         * video_id: 'aaab', 
         * thumbnail: 'https://i.ibb.co/QPNzYVy/moonlight.jpg', 
         * title: 'Midnight Serenade',
         *  authors: Array(1), …}
         */

        div.innerHTML = `
         <div class="card bg-base-100 ">
  <figure class="relative">
    <img
    class="rounded-md w-[330px] h-[200px] bg-cover "
      src="${video.thumbnail}"
      alt="Shoes" />
      <h3 class="absolute right-3 bottom-3 text-xs text-white bg-black px-2 py-1 rounded-sm">3hrs 56 min ago</h3>
  </figure>
  <div class=" flex gap-4 mt-5">
   <div>
        <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-8 ml-1  mt-3 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
   </div>

      <div class="mt-1">
        <h2 class="text-[#171717] font-bold mb-2">${video.title}</h2>
        <div class="flex items-center gap-2">
            <h5 class="font-medium text-sm text-[#17171790]">${video.authors[0].profile_name}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

        </div>
        <h3 class="mt-2 text-sm text-[#171717]">${video.others.views} views</h3>
   </div>

   
  </div>
</div>

        ` ;

        displyVideo.append(div)


    })



}

mainCategories()
// mainVideo()


// fetch (" https://openapi.programming-hero.com/api/phero-tube/category/1001")
// .then (res => res.json())
// .then (data => console.log(data))