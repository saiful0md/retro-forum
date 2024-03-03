
const letsContainerCards = document.getElementById('lets-container-cards');



const loadLetsDiscussAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    letsContainerCards.textContent = ''
    posts.forEach((postCard) => {
        // console.log(postCard);
        if (postCard.isActive) {
            isActiveIcon = `<img src="/images/greenStatus.png" alt="">`
        } else {
            isActiveIcon = `<img src="/images/redStatus.png" alt="">`
        }
        const div = document.createElement('div');


     
        div.innerHTML = `
        <div class=" flex flex-col lg:flex-row gap-6  bg-[rgba(121,125,252,0.1)] rounded-3xl shadow-xl p-4 lg:p-8">
            <div class="relative w-[95px] lg:w-[100px]">
                <img class="lg:w-[72px] w-[60px] lg:h-[72px]  rounded-xl"
                    src="${postCard.image}"
                    alt="Album" />
                <div id="isActiveIcon" class="absolute -top-[10px] left-[50px] lg:left-[60px]">
                    ${isActiveIcon}
                </div>
            </div>
            <div class="flex flex-col gap-4 w-full">
                <div class="flex gap-6 font-mulish">
                    <h4># <span>${postCard.category}</span></h4>
                    <h4>Author : ${postCard.author.name}</h4>
                </div>
                <h2 class="font-mulish text-xl font-semibold">${postCard.title}</h2>
                <p class="font-mulish text-base">${postCard.description}</p>
                
                <div class="border border-dashed border-[#12132D40]">
                </div>
                <div class="flex justify-between">
                    <div class="flex gap-6">
                        <p><i class="fa-regular fa-message"></i> <span>${postCard.comment_count}</span></p>
                        <p><i class="fa-regular fa-eye"></i> <span>${postCard.view_count}</span></p>
                        <p><i class="fa-regular fa-clock"></i> <span>${postCard.posted_time}</span> min</p>
                    </div>
                   <div>
                   <button onclick='envelopeHandle("${postCard.title.replace(/'/, "/")}","${postCard.view_count}")' class="addBtn bg-[rgba(16,185,129,1)]  px-2 py-1 rounded-full  flex justify-center items-center"> <i class="fa-solid text-white  fa-envelope-open"></i></button>
                   </div>
                </div>
            </div>
        </div>
        `;
        letsContainerCards.appendChild(div)
    });
}


// title mark 

// const markCurrentScore = document.getElementsByClassName("mark-counter");
// const markCurrentText = markCurrentScore.innerText;
// const currentScore = parseInt(markCurrentText);
// const newScore = currentScore + 1;
// console.log(newScore);


const markContainer = document.getElementById('mark-container');
const envelopeHandle = (postTitle,postView) =>{

    const div = document.createElement('div');
    div.innerHTML = ` <div class="flex bg-white p-4 rounded-2xl">
    <h3>${postTitle}</h3>
    <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-eye"></i>
        <span>${postView}</span></p>
    </div>`;
    markContainer.appendChild(div)
}

const loadLetsDiscussSearch = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`);
    const data = await res.json();
    const posts = data.posts;
    
    letsContainerCards.textContent = ''
    posts.forEach((postCard) => {
        if (postCard.isActive) {
            isActiveIcon = `<img src="/images/greenStatus.png" alt="">`
        } else {
            isActiveIcon = `<img src="/images/redStatus.png" alt="">`
        }

        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" flex flex-col lg:flex-row gap-6  bg-[rgba(121,125,252,0.1)] rounded-3xl shadow-xl p-4 lg:p-8">
            <div class="relative w-[95px] lg:w-[100px]">
                <img class="lg:w-[72px] w-[60px] lg:h-[72px]  rounded-xl"
                    src="${postCard.image}"
                    alt="Album" />
                <div id="isActiveIcon" class="absolute -top-[10px] left-[50px] lg:left-[60px]">
                    ${isActiveIcon}
                </div>
            </div>
            <div class="flex flex-col gap-4 w-full">
                <div class="flex gap-6 font-mulish">
                    <h4># <span>${postCard.category}</span></h4>
                    <h4>Author : ${postCard.author.name}</h4>
                </div>
                <h2 class="font-mulish text-xl font-semibold">${postCard.title}</h2>
                <p class="font-mulish text-base">${postCard.description}</p>
                
                <div class="border border-dashed border-[#12132D40]">
                </div>
                <div class="flex justify-between">
                    <div class="flex gap-6">
                        <p><i class="fa-regular fa-message"></i> <span>${postCard.comment_count}</span></p>
                        <p><i class="fa-regular fa-eye"></i> <span>${postCard.view_count}</span></p>
                        <p><i class="fa-regular fa-clock"></i> <span>${postCard.posted_time}</span> min</p>
                    </div>
                    <div>
                    <button onclick='envelopeHandle("${postCard.title.replace(/'/, "/")}","${postCard.view_count}")' class="addBtn bg-[rgba(16,185,129,1)]  px-2 py-1 rounded-full  flex justify-center items-center"> <i class="fa-solid text-white  fa-envelope-open"></i></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        letsContainerCards.appendChild(div)
    });
}

// Search handle

const handleSearch = () => {
    const searchBox = document.getElementById('search-input');
    const searchValue = searchBox.value;
    loadLetsDiscussSearch(searchValue)
}

// latest Post 

const latestPostsContainer = document.getElementById("latest-posts-container");
const loadLatestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data = await res.json();
    data.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-[513px] bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="${item.cover_image}" alt=""
                    class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <div>
                    <p class="text-base text-[rgba(18,19,45,0.6)] flex gap-4 items-center"><i
                            class="fa-regular fa-calendar-days"></i> <span>${item.author.posted_date}</span></p>
                </div>
                <h2 class="text-lg font-mulish">${item.title}</h2>
                <p class="text-base text-[rgba(18,19,45,0.6)]">${item.description}</p>
                <div class="card-actions">
                    <img class="w-[44px] rounded-full" src="${item.profile_image}" alt="">
                    <div>
                        <h5 class="text-base font-mulish font-bold">${item.author.name}</h5>
                        <p>${item.author.designation }</p>
                    </div>
                </div>
            </div>
         </div>
        `;
        latestPostsContainer.appendChild(div)
        console.log();
    })
}


loadLatestPosts()
loadLetsDiscussAllPost()
loadLetsDiscussSearch()
