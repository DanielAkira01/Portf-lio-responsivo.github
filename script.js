const mobilemenu = document.querySelector(".mobilemenu");
const menushow = document.querySelector(".nav-menu");

mobilemenu.addEventListener("click", () {
        mobilemenu.classList.toggle('active');
        menushow.classList.toggle('active');
    })