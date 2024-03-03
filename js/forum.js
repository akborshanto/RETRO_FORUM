



/* async */
const discussData=async function(){

const res=await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
const data=await res.json()
const discuss_left=document.getElementById('discuss_left')


data.posts.forEach((item)=>

{
    console.log(item)
    const div=document.createElement('div')
   
div.innerHTML=`


<div class="discuss-left-container flex justify-between gap-8 bg-[#797DFC1A] mb-6 p-6 rounded-lg">
<div class="discuss-left-img  ">
    <div class="avatar online">
        <div class="w-24 rounded-full">
          <img src="${item.image}" />
        </div>
</div>


</div>
<div class="discuss-left-title">
<div class="upper-title flex justify-between">
    <p>${item.category}</p>
    <p>Author:${item.author.name}</p>

</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <hr class="border-dashed  mb-4 mt-4 border-[1px]">
<div class="bottom-icon-container flex justify-between">
<div class="bottom-icon-left flex  gap-8">
    <div class="bottom-icon ">
        <i class="fa-solid fa-message"></i>
        <span>${item.comment_count}</span>
    </div>
    <div class="bottom-icon">
        <i class="fa-regular fa-eye"></i>
        <span>${item.view_count}</span>
    </div>
    <div class="bottom-icon">
        <i class="fa-solid fa-clock"></i>
        <span>${item.posted_time}</span>
    </div>
</div>
<div class="bottom-icon-right ">
    <i class="fa-solid fa-envelope bg-[#10B981] flex justify-center items-center lg:w-[40px]  lg:h-[40px] rounded-full text-white"></i>
</div>
</div>

    </div>
</div>






`
discuss_left.appendChild(div)
}

)



}
discussData()