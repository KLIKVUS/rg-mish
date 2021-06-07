window.addEventListener("load", () => {
    // Теги
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");
    const INcontainer = document.querySelector(".INcontainer");
    // Переменные прокрутки
    const scrollEl = document.querySelectorAll(".cont");
    let scrollPos = 0;
    // Размер картинки
    var imgSize = null;
    const imgSizeF = () => {
        if (window.innerWidth > 800) {
            imgSize = Math.floor(window.innerWidth - (window.innerWidth / 2.5));
            // Размеры тегов, которые содержат картинки
            INcontainer.style.width = imgSize + "px";
            scrollEl.forEach(scrollEl => { scrollEl.firstElementChild.style.width = imgSize + "px"; })
            return;
        } else {
            imgSize = Math.floor(window.innerWidth - (window.innerWidth / 5));
            // Размеры тегов, которые содержат картинки
            INcontainer.style.width = imgSize + "px";
            scrollEl.forEach(scrollEl => { scrollEl.firstElementChild.style.width = imgSize + "px"; })
            return;
        }
    }
    imgSizeF();
    window.addEventListener("resize", imgSizeF)

    const ScrollLeft = () => {
        if (scrollPos != 0) {
            INcontainer.style.left = (scrollPos += imgSize) + "px";
        } else {
            scrollPos = (-((imgSize * scrollEl.length) - imgSize));
            INcontainer.style.left = scrollPos + "px";
        }
    }
    const ScrollRight = () => {
        if (scrollPos != -((imgSize * scrollEl.length) - imgSize)) {
            INcontainer.style.left = (scrollPos -= imgSize) + "px";
        } else {
            scrollPos = 0;
            INcontainer.style.left = "0";
        }
    }

    // Вызов функций
    btnLeft.addEventListener("click", ScrollLeft);
    btnRight.addEventListener("click", ScrollRight);
})