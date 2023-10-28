const mobilemenu = document.querySelector("mobilemenu");
const menuicon = document.querySelector("navigation_header");


mobilemenu.addEventListener("clik", ()=>{
    mobilemenu.classList.toggle('active');
    menuicon.classList.toggle('active');
})