// 2) По клику на кнопку добавить в корзину товар след параметрами:
//         1)Картинка 
//         2)Заголовок 
//         3)Доп параметры цвут
//         4)Цена
//         3)Добавить в корзину


// let title = document.getElementsByClassName("title");
// console.log(title[1].innerText);

// Получить данные о товаре то есть картинку, текст, цену и т. д.
// let imgs = document.getElementsByTagName("img");
// console.log(imgs[1]);

// let p = document.getElementsByTagName("p");
// console.log(p[7].innerText);

// let price = document.getElementsByClassName("price");
// console.log(price[0].innerText);

// let reviews = document.getElementsByClassName("reviews");
// console.log(reviews[0].innerText);


// с помощью цикла сделайте перебор товаров
// по клику получить название товара с помощью js
// по клику получить цену товара с помощью js
// по клику получить адрес картинки с помощью js
// попробуйте с помощью js поменять название товара и цену товара    

// let product = document.getElementsByClassName("product");
// for (let i = 0;i < product.length;i++ ) {
//     console.log(product[i]);
// }

// function name() {
//     console.log(title[1].innerText);
// }
// let priceSpan = document.querySelectorAll(".price span");

// function prices() {
//    console.log(priceSpan[0].innerText);
// }

// let img = document.querySelector(".img img");

// function link() {
//     console.log(img);
// }

// title[3].innerText = "Almasbek uulu Iman";
// // price[1].innerText = "";
// priceSpan[1].innerText = "∞";

// ______________________________________________________________________-

// HW - 30

// Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b


// function krug(r) {
//     r = prompt("Напишите радиус:");
//     let res = 2 * r;
//     console.log("Длинна вашей окружности равен: " + 2 * r);
// }

// krug();

// function min(a,b) {
//     if (a < b) {
//         console.log("a = " + a + "\n" + "b = " + b);
//         console.log(a + " a Меньше чем b");
//     }else if (b < a){
//         console.log("a = " + a + "\n"  + "b = " + b);
//         console.log(b + " b Меньше чем a");
//     }
// }

// min(9,2);
// min(1,2);

// **********HW-31****************************************************
// Сделайте функцию которая возводить в степень числа вводимые пользователем

    // function pow(a,b) {
    //     a = prompt("Напишите число: ");
    //     b = prompt("Напишите степень: ");
    //     console.log(a ** b);
    // }

    // pow();
    // Сделайте функцию которая находит площадь круга, радиус вводить пользователь. 

    // function nums(r) {
    //     r = +prompt("Напишите радиус: ");
    //     let res = 3.14 * (r ** 2);
    //     console.log(res + "м квадрат");
    // }

    // nums();

    //  Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь

    // function square(a,b) {
    //     a = +prompt("Напишите длину: ");
    //     b = +prompt("Напишите ширину: ");
    //     let S = a * b;
    //     console.log(S);
    // }

    // square();

// **************************************************************



// HW-32
// *****************************************************

    function floatingPointNumber() {
        let num1 = +prompt("Напишите первое число с плавающей точкой: ");
        let num2 = +prompt("Напишите второе число с плавающей точкой: ");
        let result = num1 + num2;
        console.log(Math.round(result));
    }

    floatingPointNumber();

// *****************************************************