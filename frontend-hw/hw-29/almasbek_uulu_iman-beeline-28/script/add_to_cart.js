// 2) По клику на кнопку добавить в корзину товар след параметрами:
//         1)Картинка 
//         2)Заголовок 
//         3)Доп параметры цвут
//         4)Цена
//         3)Добавить в корзину


let title = document.getElementsByClassName("title");
console.log(title[1].innerText);

// Получить данные о товаре то есть картинку, текст, цену и т. д.
let imgs = document.getElementsByTagName("img");
console.log(imgs[1]);

let p = document.getElementsByTagName("p");
console.log(p[7].innerText);

let price = document.getElementsByClassName("price");
console.log(price[0].innerText);

let reviews = document.getElementsByClassName("reviews");
console.log(reviews[0].innerText);


// с помощью цикла сделайте перебор товаров
// по клику получить название товара с помощью js
// по клику получить цену товара с помощью js
// по клику получить адрес картинки с помощью js
// попробуйте с помощью js поменять название товара и цену товара    

let product = document.getElementsByClassName("product");
for (let i = 0;i < product.length;i++ ) {
    console.log(product[i]);
}

function name() {
    console.log(title[1].innerText);
}
let priceSpan = document.querySelectorAll(".price span");

function prices() {
   console.log(priceSpan[0].innerText);
}

let img = document.querySelector(".img img");

function link() {
    console.log(img);
}

title[3].innerText = "Almasbek uulu Iman";
// price[1].innerText = "";
priceSpan[1].innerText = "∞";