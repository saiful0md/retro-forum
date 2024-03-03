
const letsContainerCards = document.getElementById('lets-container-cards');

const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;

    posts.forEach( (postCard) => {
        if(postCard.isActive){
            isActiveIcon = `<img src="/images/greenStatus.png" alt="">`
        }else{
            isActiveIcon = `<img src="/images/redStatus.png" alt="">`
        }

        const div = document.createElement('div');
        div.innerHTML =`
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
                    <div
                        class="bg-[rgba(16,185,129,1)]  px-2 py-1 rounded-full  flex justify-center items-center">
                        <a href=""> <i class="fa-solid text-white  fa-envelope-open"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;
        letsContainerCards.appendChild(div)
    });
}


loadAllPost()