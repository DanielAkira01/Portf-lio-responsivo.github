const mobilemenu = document.querySelector(".mobilemenu");
const menushow = document.querySelector(".nav-menu");

mobilemenu.addEventListener("click", function() {
    mobilemenu.classList.toggle('active');
    menushow.classList.toggle('active');
});

// Adicione o seguinte código para tornar o menu responsivo

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) { // Ajuste o valor conforme necessário
        mobilemenu.classList.remove('active');
        menushow.classList.remove('active');
    }
});