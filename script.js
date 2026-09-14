/* =========================================
   GULNORA — JAVASCRIPT
   BY HILOLA
========================================= */


/* =========================================
   TELEGRAM BOT SOZLAMALARI
   (BotFather'dan olingan token va chat_id
   shu yerga qo'yiladi)
========================================= */

const TELEGRAM_BOT_TOKEN = "8846565915:AAGFCtiWoJJxxdwXfzpbjPGi6pVEQY3M8Dg"; // masalan: "7123456789:AAH...."
const TELEGRAM_CHAT_ID = "619792550";           // masalan: "123456789"


// Telegramga xabar yuborish uchun umumiy funksiya
async function sendTelegramMessage(text) {

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: "HTML"
            })
        });

        const data = await response.json();

        if (!data.ok) {
            console.error("Telegram xatosi:", data);
            return false;
        }

        return true;

    } catch (error) {

        console.error("Telegramga ulanishda xatolik:", error);
        return false;

    }

}


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    uz: {

        navHome: "Bosh sahifa",
        navFlowers: "Gullar",
        navAbout: "Biz haqimizda",
        navContact: "Aloqa",

        heroSmall: "HAR BIR GULDA — BIR HIKOYA",
        heroTitle: "Go‘zallikni<br><i>gullar orqali</i> his qiling",
        heroText: "Nafis gullar, samimiy tuyg‘ular va unutilmas lahzalar. Siz uchun mehr bilan tanlangan har bir guldasta.",
        heroButton: "Gullarni ko‘rish",

        feature1Title: "Yangi gullar",
        feature1Text: "Har kuni yangi tanlov",

        feature2Title: "Chiroyli qadoq",
        feature2Text: "Har bir detal mehr bilan",

        feature3Title: "Tez yetkazib berish",
        feature3Text: "Tuyg‘ularingiz vaqtida yetadi",

        feature4Title: "Mehr bilan",
        feature4Text: "Siz uchun maxsus yaratiladi",

        flowersLabel: "BIZNING TO‘PLAMIMIZ",
        flowersTitle: "Sizga mos <i>guldasta</i>",
        flowersText: "Har bir gul — o‘ziga xos tuyg‘u. O‘zingizga yoqqanini tanlang.",

        filterAll: "Barchasi",
        filterRomantic: "Romantik",
        filterClassic: "Klassik",
        filterSpecial: "Maxsus",

        popular: "Mashhur",
        new: "Yangi",
        favorite: "Sevimli",
        special: "Maxsus",

        roseCategory: "ROMANTIK",
        roseName: "Royal Roses",
        roseDescription: "Nafis va samimiy hislar uchun qizil atirgullar.",

        tulipCategory: "NOZIK",
        tulipName: "Pink Tulips",
        tulipDescription: "Bahor kayfiyatini olib keluvchi pushti lolalar.",

        sunflowerName: "Sunny Flowers",
        sunflowerDescription: "Quvonch va iliqlikni ifodalovchi yorqin gullar.",

        bouquetName: "Dream Bouquet",
        bouquetDescription: "Turli gullarning nafis va zamonaviy kombinatsiyasi.",

        lavenderName: "Lavender Love",
        lavenderDescription: "Tinchlik va sokinlikni ifodalovchi lavanda.",

        peonyName: "Pink Peony",
        peonyDescription: "Nafis ko‘rinish va yumshoq ranglar uyg‘unligi.",

        orchidName: "White Orchid",
        orchidDescription: "Nafosat va o‘ziga xoslikni sevuvchilar uchun.",

        weddingName: "Wedding Dream",
        weddingDescription: "Eng muhim kuningiz uchun yaratilgan maxsus guldasta.",

        add: "+ Qo‘shish",

        aboutLabel: "BIZ HAQIMIZDA",
        aboutTitle: "Gullar shunchaki gul emas. <i>Ular — hislar.</i>",
        aboutText1: "Gulnora — oddiy gul do‘koni emas. Biz insonlar ayta olmaydigan tuyg‘ularni gullar orqali ifodalashga yordam beramiz.",
        aboutText2: "Har bir guldastani tanlashda uning rangi, shakli va kayfiyatiga alohida e’tibor beramiz. Chunki bizningcha, eng chiroyli sovg‘a — samimiyat bilan tanlangan sovg‘adir.",

        quote: "“Ba’zan bir dasta gul minglab so‘zlardan ko‘ra ko‘proq narsani aytadi.”",

        contactLabel: "BIZ BILAN BOG‘LANING",
        contactTitle: "Kimdir uchun <i>quvonch</i> yuboring",
        contactText: "Savollaringiz yoki maxsus buyurtmangiz bo‘lsa, biz bilan bog‘laning.",

        addressTitle: "Manzil",
        phoneTitle: "Telefon",

        namePlaceholder: "Ismingiz",
        emailPlaceholder: "Email manzilingiz",
        messagePlaceholder: "Xabaringiz...",

        sendButton: "Xabar yuborish →",

        footerText: "Gullar bilan yaxshi lahzalarni yanada chiroyli qiling.",
        rights: "Barcha huquqlar himoyalangan.",

        cartTitle: "Savat",
        emptyCart: "Savatingiz hozircha bo‘sh.",
        total: "Jami",
        checkout: "Buyurtma berish",
        addedMessage: "Mahsulot savatga qo‘shildi",

        orderEmpty: "Avval savatga gul qo‘shing.",
        orderSuccess: "Buyurtmangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.",
        orderError: "Buyurtmani yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.",

        formSuccess: "Xabaringiz yuborildi. Rahmat!"
    },


    ru: {

        navHome: "Главная",
        navFlowers: "Цветы",
        navAbout: "О нас",
        navContact: "Контакты",

        heroSmall: "В КАЖДОМ ЦВЕТКЕ — ИСТОРИЯ",
        heroTitle: "Почувствуйте<br><i>красоту цветов</i>",
        heroText: "Нежные цветы, искренние чувства и незабываемые моменты. Каждый букет выбран с любовью специально для вас.",
        heroButton: "Смотреть цветы",

        feature1Title: "Свежие цветы",
        feature1Text: "Новый выбор каждый день",

        feature2Title: "Красивая упаковка",
        feature2Text: "Каждая деталь с любовью",

        feature3Title: "Быстрая доставка",
        feature3Text: "Ваши чувства вовремя",

        feature4Title: "С любовью",
        feature4Text: "Создано специально для вас",

        flowersLabel: "НАША КОЛЛЕКЦИЯ",
        flowersTitle: "Букет, созданный <i>для вас</i>",
        flowersText: "Каждый цветок передаёт особое чувство. Выберите тот, который вам нравится.",

        filterAll: "Все",
        filterRomantic: "Романтика",
        filterClassic: "Классика",
        filterSpecial: "Особенные",

        popular: "Популярный",
        new: "Новый",
        favorite: "Любимый",
        special: "Особенный",

        roseCategory: "РОМАНТИКА",
        roseName: "Royal Roses",
        roseDescription: "Красные розы для самых нежных и искренних чувств.",

        tulipCategory: "НЕЖНОСТЬ",
        tulipName: "Pink Tulips",
        tulipDescription: "Розовые тюльпаны, которые подарят весеннее настроение.",

        sunflowerName: "Sunny Flowers",
        sunflowerDescription: "Яркие цветы, символизирующие радость и тепло.",

        bouquetName: "Dream Bouquet",
        bouquetDescription: "Нежная и современная композиция из разных цветов.",

        lavenderName: "Lavender Love",
        lavenderDescription: "Лаванда, символизирующая спокойствие и гармонию.",

        peonyName: "Pink Peony",
        peonyDescription: "Нежная композиция в мягких и красивых оттенках.",

        orchidName: "White Orchid",
        orchidDescription: "Для тех, кто ценит элегантность и уникальность.",

        weddingName: "Wedding Dream",
        weddingDescription: "Особенный букет для вашего самого важного дня.",

        add: "+ Добавить",

        aboutLabel: "О НАС",
        aboutTitle: "Цветы — это не просто цветы. <i>Это чувства.</i>",
        aboutText1: "Gulnora — это не просто цветочный магазин. Мы помогаем выражать чувства, которые иногда трудно сказать словами.",
        aboutText2: "Мы уделяем внимание цвету, форме и настроению каждого букета. Ведь самый красивый подарок — тот, который выбран от всего сердца.",

        quote: "“Иногда один букет цветов может сказать больше, чем тысячи слов.”",

        contactLabel: "СВЯЖИТЕСЬ С НАМИ",
        contactTitle: "Подарите кому-то <i>радость</i>",
        contactText: "Если у вас есть вопросы или особый заказ, свяжитесь с нами.",

        addressTitle: "Адрес",
        phoneTitle: "Телефон",

        namePlaceholder: "Ваше имя",
        emailPlaceholder: "Ваш email",
        messagePlaceholder: "Ваше сообщение...",

        sendButton: "Отправить →",

        footerText: "Сделайте прекрасные моменты ещё красивее с цветами.",
        rights: "Все права защищены.",

        cartTitle: "Корзина",
        emptyCart: "Ваша корзина пока пуста.",
        total: "Итого",
        checkout: "Оформить заказ",
        addedMessage: "Товар добавлен в корзину",

        orderEmpty: "Сначала добавьте цветы в корзину.",
        orderSuccess: "Ваш заказ принят! Мы свяжемся с вами в ближайшее время.",
        orderError: "Ошибка при отправке заказа. Попробуйте ещё раз.",

        formSuccess: "Ваше сообщение отправлено. Спасибо!"
    },


    en: {

        navHome: "Home",
        navFlowers: "Flowers",
        navAbout: "About us",
        navContact: "Contact",

        heroSmall: "EVERY FLOWER TELLS A STORY",
        heroTitle: "Feel the<br><i>beauty of flowers</i>",
        heroText: "Elegant flowers, sincere feelings and unforgettable moments. Every bouquet is carefully selected with love for you.",
        heroButton: "Explore flowers",

        feature1Title: "Fresh flowers",
        feature1Text: "A fresh selection every day",

        feature2Title: "Beautiful packaging",
        feature2Text: "Every detail made with love",

        feature3Title: "Fast delivery",
        feature3Text: "Your feelings arrive on time",

        feature4Title: "Made with love",
        feature4Text: "Created especially for you",

        flowersLabel: "OUR COLLECTION",
        flowersTitle: "A bouquet made <i>for you</i>",
        flowersText: "Every flower expresses a unique feeling. Choose the one you love.",

        filterAll: "All",
        filterRomantic: "Romantic",
        filterClassic: "Classic",
        filterSpecial: "Special",

        popular: "Popular",
        new: "New",
        favorite: "Favourite",
        special: "Special",

        roseCategory: "ROMANTIC",
        roseName: "Royal Roses",
        roseDescription: "Red roses for the most sincere and beautiful feelings.",

        tulipCategory: "DELICATE",
        tulipName: "Pink Tulips",
        tulipDescription: "Pink tulips that bring a fresh spring feeling.",

        sunflowerName: "Sunny Flowers",
        sunflowerDescription: "Bright flowers that represent joy and warmth.",

        bouquetName: "Dream Bouquet",
        bouquetDescription: "A modern and elegant combination of different flowers.",

        lavenderName: "Lavender Love",
        lavenderDescription: "Lavender representing peace, calmness and harmony.",

        peonyName: "Pink Peony",
        peonyDescription: "A delicate combination of soft and beautiful colours.",

        orchidName: "White Orchid",
        orchidDescription: "For those who appreciate elegance and uniqueness.",

        weddingName: "Wedding Dream",
        weddingDescription: "A special bouquet created for your most important day.",

        add: "+ Add",

        aboutLabel: "ABOUT US",
        aboutTitle: "Flowers are not just flowers. <i>They are feelings.</i>",
        aboutText1: "Gulnora is more than a flower shop. We help people express feelings that are sometimes difficult to put into words.",
        aboutText2: "We carefully consider the colour, shape and mood of every bouquet. Because we believe that the most beautiful gift is one chosen from the heart.",

        quote: "“Sometimes a bouquet of flowers can say more than a thousand words.”",

        contactLabel: "GET IN TOUCH",
        contactTitle: "Send someone <i>joy</i>",
        contactText: "If you have any questions or a special request, feel free to contact us.",

        addressTitle: "Address",
        phoneTitle: "Phone",

        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message...",

        sendButton: "Send message →",

        footerText: "Make beautiful moments even more special with flowers.",
        rights: "All rights reserved.",

        cartTitle: "Shopping bag",
        emptyCart: "Your shopping bag is empty.",
        total: "Total",
        checkout: "Place order",
        addedMessage: "Added to your shopping bag",

        orderEmpty: "Please add some flowers first.",
        orderSuccess: "Your order has been received! We will contact you soon.",
        orderError: "Something went wrong while sending your order. Please try again.",

        formSuccess: "Your message has been sent. Thank you!"
    }

};


/* =========================================
   LANGUAGE SYSTEM
========================================= */

let currentLanguage = "uz";

const langButtons = document.querySelectorAll(".lang-btn");

function changeLanguage(language) {

    currentLanguage = language;

    const text = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.dataset.key;

        if (text[key]) {
            element.innerHTML = text[key];
        }

    });


    document.querySelectorAll("[data-placeholder]").forEach(element => {

        const key = element.dataset.placeholder;

        if (text[key]) {
            element.placeholder = text[key];
        }

    });


    langButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.lang === language) {
            button.classList.add("active");
        }

    });

}


langButtons.forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});


/* =========================================
   FILTERS
========================================= */

const filterButtons = document.querySelectorAll(".filter");
const flowerCards = document.querySelectorAll(".flower-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        flowerCards.forEach(card => {

            if (filter === "all" ||
                card.dataset.category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   HEART / FAVOURITE BUTTON
========================================= */

document.querySelectorAll(".heart-button").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            button.innerHTML = "♥";
        } else {
            button.innerHTML = "♡";
        }

    });

});


/* =========================================
   SHOPPING CART
========================================= */

let cart = [];

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");


function openCart() {

    cartSidebar.classList.add("open");
    cartOverlay.classList.add("show");

}


function closeCartSidebar() {

    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("show");

}


cartButton.addEventListener("click", openCart);

closeCart.addEventListener("click", closeCartSidebar);

cartOverlay.addEventListener("click", closeCartSidebar);


/* =========================================
   ADD TO CART
========================================= */

document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", () => {

        const product = {

            name: button.dataset.name,

            price: Number(button.dataset.price),

            image: button.dataset.image

        };


        cart.push(product);

        updateCart();

        showToast();

    });

});


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🌸</div>

                <p>${translations[currentLanguage].emptyCart}</p>

            </div>

        `;

        cartTotal.textContent = "0 so‘m";

        return;

    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>${formatPrice(item.price)} so‘m</p>

            </div>

            <button class="remove-item" data-index="${index}">
                ×
            </button>

        `;

        cartItems.appendChild(itemElement);

    });


    cartTotal.textContent = `${formatPrice(total)} so‘m`;


    document.querySelectorAll(".remove-item").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            cart.splice(index, 1);

            updateCart();

        });

    });

}


/* =========================================
   PRICE FORMAT
========================================= */

function formatPrice(number) {

    return new Intl.NumberFormat("uz-UZ").format(number);

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast() {

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================
   CHECKOUT
========================================= */

const checkoutButton = document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", async () => {

    if (cart.length === 0) {

        alert(translations[currentLanguage].orderEmpty);

        return;

    }


    // Tugmani vaqtincha bloklaymiz, foydalanuvchi ikki marta bosib yubormasin
    checkoutButton.disabled = true;


    let total = 0;

    let orderText = "🌸 <b>Yangi buyurtma — Gulnora</b>\n\n";

    cart.forEach(item => {

        total += item.price;

        orderText += `• ${item.name} — ${formatPrice(item.price)} so‘m\n`;

    });

    orderText += `\n💰 <b>Jami:</b> ${formatPrice(total)} so‘m`;


    const sent = await sendTelegramMessage(orderText);

    checkoutButton.disabled = false;


    if (sent) {

        alert(translations[currentLanguage].orderSuccess);

        cart = [];

        updateCart();

        closeCartSidebar();

    } else {

        alert(translations[currentLanguage].orderError || "Buyurtmani yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.");

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async event => {

    event.preventDefault();

    const formInputs = contactForm.querySelectorAll("input, textarea");

    const name = formInputs[0].value;
    const email = formInputs[1].value;
    const message = formInputs[2].value;

    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const contactText =
        `✉️ <b>Yangi xabar — Gulnora</b>\n\n` +
        `👤 Ism: ${name}\n` +
        `📧 Email: ${email}\n` +
        `💬 Xabar: ${message}`;

    const sent = await sendTelegramMessage(contactText);

    submitButton.disabled = false;

    if (sent) {

        alert(translations[currentLanguage].formSuccess);

        contactForm.reset();

    } else {

        alert(translations[currentLanguage].orderError || "Xabarni yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.");

    }

});


/* =========================================
   INITIALIZATION
========================================= */

changeLanguage("uz");

updateCart();