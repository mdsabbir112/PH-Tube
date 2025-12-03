
// Fetch the Category Api first

const mainCategory = () => {
    fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(response => response.json())
    .then (data => displayCategory(data.categories))
} 

const displayCategory = (categories) => {


    // Run a loop  
    for (let cat of categories) {
        // console.log(cat.category);
        const mainDiv = document.getElementById("CategoryData");
       
        //Create a DIV 
        const newDiv = document.createElement("div");
        newDiv.innerHTML =`
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class=" btn btn-soft hover:bg-[#FF1F3D] hover:text-white text-lg font-semibold">${cat.category}</button>
        `
        mainDiv.append(newDiv);

    }
}


const loadCategoryVideos = (id) => {
    //Make the Dynamic Url 
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(response => response.json())
    .then (data => displayVideos(data.category))

// change the color after click the button 
    const changeColor = document.getElementById(`btn-${id}`)
    // changeColor.classList.remove('active');
    
    removeActiveClass(); // For remove the active class from the btn
    changeColor.classList.add('active');
    console.log(changeColor);
}

const removeActiveClass = () => {
     const findActiveClass = document.getElementsByClassName("active");
     console.log(findActiveClass);
    for(let btn of findActiveClass){
        btn.classList.remove("active");
        console.log(btn);
    }
}

const mainVideo = (searchText = '') => {

    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then(response => response.json())
    .then(data => displayVideos(data.videos))

        //For change the color of All Button after click Event
    const btnAll = document.getElementById("btn-all");
    btnAll.classList.add("active");
}

const displayVideos = (videos) => {
    // console.log(videos);

const insertVideos = document.getElementById("showVideo");

// Remove all the div while click into the new section div
insertVideos.innerHTML ="";

     if(videos.length == 0){
        // const newDiv = document.getElementById("div");
        insertVideos.innerHTML = `
             <div class="py-28 col-span-full flex justify-center items-center flex-col ">
            <img src="assets/Icon.png" alt="icons">
            <h2 class=" mt-8 text-center font-bold text-3xl text-[#171717]">Oops!! Sorry, There is no content here</h2>
        </div>
        `
        
        return;
    }

    for (let video of videos) {
        console.log(video);
        
        const newDiv = document.createElement("div");
        newDiv.innerHTML =`
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
            <h5 class="font-medium text-sm text-[#17171790]">${video.authors[0].verified == true ? `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
                ` : ``}</h5>

        </div>
        <h3 class="mt-2 text-sm text-[#171717]">${video.others.views} views</h3>
   </div>

   
  </div>
  <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block my-3 border-none">Show Details</button>
</div> 
        `

        insertVideos.append(newDiv);
    }


}

const loadVideoDetails = (videoId) => {
    console.log(videoId);
    //Make an url dynamically for specific video Id
    const url = ` https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayVideoDetails(data))
}

const displayVideoDetails = (ApiDetails) => {
    // console.log(ApiDetails); 

    document.getElementById("video_details").showModal();

    const ModalDetails = document.getElementById("modal_Details");
    ModalDetails.innerHTML = `
        <div class="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img
    class="w-full h-60 bg-cover"
      src="${ApiDetails.video.thumbnail}"
      alt="Video Details" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${ApiDetails.video.title}</h2>
    <p>${ApiDetails.video.description}</p>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Watch Now</button>


      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>


    </div>
  </div>
</div>
    `;

}

// Search by title

document.getElementById("searchByTitle").addEventListener("keyup", (event) => {
    const input = event.target.value;
    mainVideo(input);
    // console.log(input);
})

mainCategory()
// mainVideos()


