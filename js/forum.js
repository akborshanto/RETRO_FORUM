/* ============================================================
                       DISCUSS_DATA
==========================================================*/
const discuss_left = document.getElementById("discuss_left");
const message_box = document.getElementById("message_box");

const loadData = async (id,item="") => {
  discuss_left.innerHTML=""
  document.getElementById("loading").classList.remove("hidden");
  const responsive = await fetch(
    `  https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`
  );
  const data = await responsive.json();
  const forumData = data.posts;
  // console.log(forumData)
  discussDisplayData(forumData);
};

// loadData();

const discussDisplayData = (forumData) => {
  //console.log(item)
  setTimeout(() => {
    // console.log(forumData)
    forumData.forEach((item) => {
      document.getElementById("loading").classList.add("hidden");

      /* create-discuss-left */
      const div = document.createElement("div");
      div.classList.add("mb-4");
      div.classList.add("bg-white");
      div.classList.add("rounded-lg");
      div.innerHTML = "";
      div.innerHTML = `
<div class="discuss-left-container mx-auto flex flex-col lg:flex-row  lg:justify-around lg:w-[558px] lg:items-center gap-0 lg:gap-8 mb-4 p-4 rounded-lg">
<div class="discuss-left-img text-center lg:text-start ">
<div class="indicator">
<span class="indicator-item badge border-none rounded-full  ${
        item.isActive ? "bg-[green]" : "bg-[red]"
      }"></span>
<div class="grid  h-32  place-items-center w-24  rounded-full">
<img src="${item.image}" class="rounded-full w-[70px]" />
</div>
</div>

</div>
<div class="discuss-left-title">
<div class="upper-title flex justify-between">
  <p class="text-[#12132D99] font-semibold">#${item.category}</p>
  <p class="text-[#12132D99] font-semibold">Author:${item.author.name}</p>

</div>
  <h3 class="text-[20px] lg:text-[20px] font-semibold mt-2 lg:mt-2">${
    item.title
  }</h3>
  <p class="text-[#12132D99] font-semibold my-3 text-[20px] lg:[text-20px]">${
    item.description
  }</p>
  <hr class="border-dashed  mb-4 mt-4 border-[1px]">
<div class="bottom-icon-container flex justify-between">
<div class="bottom-icon-left flex  gap-8">
  <div class="bottom-icon text-[#12132D99] font-semibold ">
      <i class="fa-solid fa-message"></i>
      <span >${item.comment_count}</span>
  </div>
  <div class="bottom-icon text-[#12132D99] font-semibold">
      <i class="fa-regular fa-eye"></i>
      <span>${item.view_count}</span>
  </div>
  <div class="bottom-icon text-[#12132D99] font-semibold">
      <i class="fa-solid fa-clock"></i>
      <span>${item.posted_time}</span>
  </div>
</div>
<div class="bottom-icon-right ">
<button id="messageBox" onclick="mess('${
        item.view_count
      }','${item.title.replace(
        /'/g,
        ""
      )}',)">  <i class="fa-solid fa-envelope bg-[#10B981] flex justify-center items-center w-[40px] h-[40px] lg:w-[40px] 
   lg:h-[40px] rounded-full text-white" id="message_box" ></i></button>
</div>
</div>

  </div>
</div>

`;
      discuss_left.appendChild(div);
    });
  }, 2000);
};

/* ============================================================
          RIGHT_ DISCUSS_DISPLAY_DATA
==========================================================*/
const discuss_right = document.getElementById("right_card_container");

const right_card_container = document.getElementById("right_card_container");
let discuss_count = document.getElementById("discuss_count");
let inte = parseInt(discuss_count.innerText);

const mess = (d2, d1) => {
  const rightCount = (inte = inte + 1);
  document.getElementById("discuss_count").innerText = rightCount;
  const div = document.createElement("h1");
  div.innerHTML = `
<div class="right-title-card flex justify-between gap-8 bg-white p-4 rounded-md mt-6 items-center">

<h3 id="discuss_title" class=" text-[17px] lg:text-[20px] font-semibold p-4 lg:p6">${d1}</h3>


<p class="text-[16px] lg:text-[16px] text-[#12132D99] font-semibold p-4 lg:p6">
    <i class="fa-regular fa-eye text-[#12132D99] "></i> <span id="discuss_demo">${d2}</span>
</p>

</div>
`;
  discuss_right.appendChild(div);
};

/* ==========================================
              HANDLE_SEARCH
============================================= */
const handleSearch = (e) => {
  const handle_input = document.getElementById("handle_input");
  const searcText = handle_input.value;
loadData(searcText)
};
//loadData("100")
// handleSearch()

/* ============================================================
                       LATEST_DATA
==========================================================*/
const cardContainer = document.getElementById("post-card");

const latestData = async (latestData) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );

  const data = await response.json();
  // console.log(data)
  latestDisplayData(data);
};

const latestDisplayData = (data) => {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
<div class="card w-96 bg-white shadow-xl p-4  mx-auto mb-6 lg:mb-0 lg:mx-0 lg:h-[565px]">
<figure class="rounded-lg"><img src="${
      item.cover_image
    }" alt="Shoes" /></figure>
<div class="card-body ">
  <div class="card-date font-semibold text-[#12132D99]">
      <i class="fa-solid fa-calendar-days"></i> <span>${
        item.author.posted_date === undefined
          ? "No Published Date"
          : item.author.posted_date
      }</span>
  </div>
<h2 class="card-title">${item.title}</h2>
<p class="text-[#12132D99] font-semibold text-[17px] ">
  ${item.description}
</p>
<div class="card-actions flex justify-between mt-4 font-semibold ">
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

latestData();
