const menuBtn = document.querySelector(".menu span");
const searchBtn = document.querySelector(".search-bar");
const cancelBtn = document.querySelector(".cancel");
const items = document.querySelector(".nav-items");         
const form = document.querySelector("form");

menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = ()=>{
    items.classList.remove("active");   
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
}

searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}