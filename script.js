const mobilemenu = document.querySelector(".mobile-menu")
const icon = document.querySelector(".list")

mobilemenu.addEventListener("click",() =>{
    mobilemenu.classList.toggle('active');
    icon.classList.toggle('active');
})