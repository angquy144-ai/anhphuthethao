// =========================
// Đồng hồ thời gian
// =========================

function updateClock(){

    const now = new Date();

    const h = String(now.getHours()).padStart(2,"0");
    const m = String(now.getMinutes()).padStart(2,"0");
    const s = String(now.getSeconds()).padStart(2,"0");

    const clock = document.getElementById("clock");

    if(clock){
        clock.innerHTML =
        "<i class='fa-solid fa-clock'></i> " +
        h + ":" + m + ":" + s;
    }

}

setInterval(updateClock,1000);
updateClock();


// =========================
// Back To Top
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


// =========================
// Highlight menu
// =========================

const menu=document.querySelectorAll("nav a");

menu.forEach(item=>{

    item.addEventListener("mouseover",()=>{

        item.style.color="#ffc107";

    });

    item.addEventListener("mouseout",()=>{

        item.style.color="#fff";

    });

});


// =========================
// Hiệu ứng card
// =========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseover",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseout",()=>{

        card.style.transform="translateY(0px)";

    });

});


// =========================
// Bình luận
// =========================

const form=document.querySelector(".comment form");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.querySelector("input").value;

const text=form.querySelector("textarea").value;

if(name==""||text==""){

alert("Vui lòng nhập đầy đủ thông tin");

return;

}

const div=document.createElement("div");

div.className="user-comment";

div.innerHTML=

"<h4>"+name+"</h4><p>"+text+"</p>";

document.querySelector(".comment").appendChild(div);

form.reset();

});


// =========================
// Chào mừng
// =========================

window.onload=function(){

console.log("THETHAO24H Loaded");

}


// =========================
// Animation khi cuộn
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});