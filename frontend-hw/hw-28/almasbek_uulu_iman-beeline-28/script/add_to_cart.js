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
