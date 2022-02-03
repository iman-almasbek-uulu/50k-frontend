// 2) По клику на кнопку добавить в корзину товар след параметрами:
//         1)Картинка 
//         2)Заголовок 
//         3)Доп параметры цвут
//         4)Цена
//         3)Добавить в корзину


// let title = document.getElementsByClassName("title");
// console.log(title[1].innerText);

// function alert_mes(par,ret) {
//     let num = 10;
//     let res = num + par - ret;
//     alert(res);
// }

// alert_mes(12,3);

// const arr = {
//     name: "iman",
//     age: 18,
//     haracter: {
//         prof: "fdsa",
//         tr: "htr",
//         of: "gha",
//     }

// };

// delete arr["name"];

// console.log(arr);

// for (let key in arr) {
//     if (typeof(arr[key]) === "object") {
//         for (let key2 in arr[key]) {
//                 console.log(arr[key][key2]);
//         }

//     }else {
//         console.log(arr[key]);
//     }
// }


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

// **************************************************************
// Что такое function

// function num(num1,num2) {
//     console.log(num1 , num2);
// }

// num(12,23);


// **************************************************************
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


//UROK-32
// *****************************************************
    // Методы и свойства строк
    let text = "hello hoW are you";
    // console.log(text.toLowerCase());

    // Методы и свойства чисел
    let num = 1234;
    // console.log(typeof num.toString());

    let x = 12.321;
    // console.log(x);
// *****************************************************


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