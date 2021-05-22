window.addEventListener("load", () => {
    // Теги
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");
    const INcontainer = document.querySelector(".INcontainer");
    // Переменные прокрутки
    const scrollEl = document.querySelectorAll(".cont");
    let scrollPos = 0;
    // Размер картинки
    var imgSize = 125;
    // Размеры тегов, которые содержат картинки
    INcontainer.style.width = imgSize + "vh";
    scrollEl.forEach(scrollEl => { scrollEl.firstElementChild.style.width = imgSize + "vh"; })

    const ScrollLeft = () => {
        if (scrollPos != 0) {
            INcontainer.style.left = (scrollPos += imgSize) + "vh";
        } else {
            scrollPos = (-((imgSize * scrollEl.length) - imgSize));
            INcontainer.style.left = scrollPos + "vh";
        }
    }
    const ScrollRight = () => {
        if (scrollPos != -((imgSize * scrollEl.length) - imgSize)) {
            INcontainer.style.left = (scrollPos -= imgSize) + "vh";
        } else {
            scrollPos = 0;
            INcontainer.style.left = "0vh";
        }
    }

    // Вызов функций
    btnLeft.addEventListener("click", ScrollLeft);
    btnRight.addEventListener("click", ScrollRight);
})