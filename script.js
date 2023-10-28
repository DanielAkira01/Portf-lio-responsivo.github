const mobilemenu = document.querySelector("mobilemenu");
const item = document.querySelector("navigation_header");


mobilemenu.addEventListener("clik", ()=>{
    mobilemenu.classList.toggle('active');
    item.classList.toggle('active');
})