/* async */
let showCategory=1000;
const discussData = async function (params) {
 


    document.getElementById('loading').classList.remove('hidden')
  const res = await fetch(
 
   // "https://openapi.programming-hero.com/api/retro-forum/posts"
   `https://openapi.programming-hero.com/api/retro-forum/posts?category=${params}
   `
  );
  const data = await res.json();
  const discuss_left = document.getElementById("discuss_left");
  const message_box = document.getElementById("message_box");
  //mess(data)
  /*  */
discuss_left.textContent= ""
setTimeout(()=>{
    data.posts.forEach((item) => {
        document.getElementById('loading').classList.add('hidden')
    
    
        const div = document.createElement("div");
        showCategory=div;
    // div.innerHTML=""
        div.innerHTML = `
    
     
    <div class="discuss-left-container flex justify-between gap-8 bg-[#797DFC1A] mb-6 p-6 rounded-lg">
    <div class="discuss-left-img ">
    
    
        <div class="avatar online " id="ava">
    ${
      //item.isActive === true ?  document.getElementById('ava').classList.add(online) :document.getElementById('ava').classList.add(offline)
      item.isActive === true ? "online" : "offline"
    }
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
      <button id="messageBox" onclick="mess('${item.view_count}','${
          item.title
        }')">  <i class="fa-solid fa-envelope bg-[#10B981] flex justify-center items-center lg:w-[40px]  lg:h-[40px] rounded-full text-white" id="message_box" ></i></button>
    </div>
    </div>
    
        </div>
    </div>
    
    
    
    
    
    `;
        discuss_left.appendChild(div);
      });
},2000)



};

/* ruggt */
/* baki ace------------------------------------------------------------------------------- */
const discuss_right = document.getElementById("right_card_container");

const right_card_container = document.getElementById("right_card_container");
let discuss_count = document.getElementById("discuss_count");
let inte = parseInt(discuss_count.innerText);
//const discuss_right=document.getElementById('discuss_right')

const mess = (d2, d1) => {
  /* mesage-bo-click */
  // const discuss_title=document.getElementById('discuss_title').innerText=d2;
  // const discuss_demo=document.getElementById('discuss_demo').innerText=d1;
  /* counting */
  const rightCount = (inte = inte + 1);
  document.getElementById("discuss_count").innerText = rightCount;
  /* discuss-right-display-item */
  /* baki ace------------------------------------------------------------------------------- */
  const div = document.createElement("h1");
  div.innerHTML = `


<div class="right-title-card flex justify-between gap-8 bg-white p-4 rounded-md mt-6 items-center">

<h3 id="discuss_title">${d1}</h3>


<p>
    <i class="fa-regular fa-eye"></i> <span id="discuss_demo">${d2}</span>
</p>

</div>






`;
  discuss_right.appendChild(div);
};
// discussData();
/* baki ace------------------------------------------------------------------------------- */

/* ================================
       LATESST POST
======================*/
const cardContainer = document.getElementById("post-card");
const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  data.forEach((item) => {
    //  console.log(item)
    const div = document.createElement("div");
    div.innerHTML = `

<div class="card w-96 bg-white shadow-xl p-4">
<figure><img src="${item.cover_image}" alt="Shoes" /></figure>
<div class="card-body ">
    <div class="card-date font-semibold text-[#12132D99]">
        <i class="fa-solid fa-calendar-days"></i> <span>${
          item.author.posted_date === undefined
            ? "No Published Date"
            : item.author.posted_date
        }</span>
    </div>
  <h2 class="card-title">${item.title}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <p class="text-[#12132D99]">
    ${item.description}
  </p>
  <div class="card-actions flex justify-between mt-4 ">
    <div class="avatar">
        <div class="w-[60px] rounded-full">
          <img src="${item.profile_image}" />
        </div>

  </div>
<div class="card-action-title">
<p>${item.author.name}</p>
<p>${
      item.author.designation === undefined
        ? "Unknown"
        : item.author.designation
    }</p>
</div>

</div>
</div>


</div>




`;

    cardContainer.appendChild(div);
  });
};



/* handle-search */
const handleSearch = (e) => {
//   console.log(e);
  const handle_input = document.getElementById("handle_input");
const searchValue=handle_input.value;
console.log(searchValue)
// discussData(searchValue);
discussData(searchValue);
};

latestPost();
// discussData();
discussData(showCategory);