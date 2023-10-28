const mobilemenu = document.querySelector(".mobilemenu");
const menushow = document.querySelector(".navigation_header");

mobilemenu.addEventListener("click", () => {
    mobilemenu.classList.toggle('active');
    menushow.classList.toggle('active');
})