window.addEventListener("load", () => {
    // Текст в header-е
    var text = ["MISH"];
    var count = 0;
    var typi = "";
    // Переменные карточек  
    const cards = document.querySelectorAll("#main-info, #screenshots, #project-info");
    // Для закрытия и открытия карт
    var card = "";
    var cardChild = "";
    var OpeningCard = false;

    
    //  Анимация набора текста в header-е
    const TypeText = () => {
        var interval = setTimeout( () => {
            typi += text[0][count];
            document.querySelector("#header-name").innerHTML = typi + "|";
            count++;

            if (count == text[0].length) {
                clearTimeout(interval);
                document.querySelector("#header-name").innerHTML = typi;
                return true;
            }
        TypeText();
        }, getRand(getRand(350*3.5)));
    }
    function getRand(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    TypeText();
    
    // Открытие карточки
    const OpenCard = (e) => {
        if (OpeningCard == false) {
            OpeningCard = true;
            if (e.tagName == "SECTION") { card = e } else if (e.target.tagName == "H1") { card = e.target.parentElement; } else { card = e.target; };
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
            
            btnOpenClose()
        }
    }
    //  Закрытие карточки
    const CloseCard = (e) => {
        if (e != undefined) { e.stopPropagation() }
        OpeningCard = false;
        cardChild.classList.add("HideSon");
        cardChild.classList.remove("unHideSon");
        cards.forEach(i => {
            i.style = null;
            i.classList.remove("hideCard");
        })

        btnOpenClose()
    }
    // Кномпачка закрыть/открыть
    const btnOpenClose = () => {
        if (OpeningCard == true) {
            card.classList.remove("CardOpen");
            card.querySelector("#CloseCard").classList.add("CloseCard");
        } else {
            card.querySelector("#CloseCard").classList.remove("CloseCard");
            card.classList.add("CardOpen");
        }
    }

    // Кнупочка для открытия меню на андроид
    const NavbarToggler = document.querySelector("#navbar-toggler");
    const NavbarMenu = document.querySelector(".site-links");
    const openMMenu = () => {
        NavbarMenu.classList.toggle("site-links-show");
    }
    NavbarToggler.addEventListener("click", openMMenu)
    
    // Плавная прокрутка, которая работает галимо и откртие карточек
    document.querySelectorAll("a.scroll-to").forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = link.getAttribute('href')
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            
            if (OpeningCard == true && window.innerWidth > "500") { CloseCard() };
            if (window.innerWidth > "500") { OpenCard(document.getElementById(blockID.substr(1))); }
        })
    })


    // Активаторы всяких функций
    const work = () => {
        cards.forEach(cards => { cards.addEventListener("click", OpenCard) });
        cards.forEach(cards => { cards.querySelector("#CloseCard").addEventListener("click", CloseCard) });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && cardChild.classList.contains("unHideSon")) { 
            CloseCard();
        }
    });


    const RES = () => { 
        if (window.innerWidth > "800") {
            return work();
        }
    }
    RES();
    window.addEventListener("resize", RES)
})