window.addEventListener("load", (e) => {
    // Переменные карточек
    const cards = document.querySelectorAll("#main-info, #screenshots, #project-info, #comment");
    // Для закрытия и открытия карт
    var card = "";
    var cardChild = "";
    var OpeningCard = false;

    // Всякие функции
    const OpenCard = (e) => {
        if (OpeningCard == false) {
            OpeningCard = true;
            if (e.target.tagName == "H1") { card = e.target.parentElement; } else { card = e.target; }
            cardChild = card.firstElementChild.nextElementSibling;
            cards.forEach(i => {
                if (card != i) {
                    i.classList.add("hideCard")
                }
                if (card === i) {
                    i.style.cursor = "default";
                    cardChild.classList.remove("HideSon");
                    cardChild.classList.add("unHideSon");
                }
            });
        }
    }

    const CloseCard = (e) => {
        if (e.keyCode === 27 && cardChild.classList == "unHideSon") {
            OpeningCard = false;
            cardChild.classList.add("HideSon");
            cardChild.classList.remove("unHideSon");
            cards.forEach(i => {
                i.style.cursor = "pointer";
                i.classList.remove("hideCard");
            })        }
    }


    // Активаторы всяких функций
    cards.forEach(cards => { cards.addEventListener("click", OpenCard); })
    window.addEventListener("keydown", CloseCard);
})