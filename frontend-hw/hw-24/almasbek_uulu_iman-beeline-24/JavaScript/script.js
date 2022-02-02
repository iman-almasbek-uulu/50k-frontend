// Д/З 24
// создайте объект person, этот объект должен содержать данные о человеке, 
// например имя, фамилие, возраст, год рождение, место рождение и.т.д. 
let person = {
    name:           "iman",
    lastName:       "almasbek uulu",
    age:            18,
    year:           2003,
    placeOfBirth:   "Kochkor",
    gender:         "man",
};
// создайте массив, внутри массива запишите несколько данных 
let arr = ["iman", 'tilek', 2003, ["school", "Kalygul Bai Uulu"]];
// сделайте перебор массива и выведите на консоли 
console.log("Массивы" + "\n " + arr[0] + "\n " + arr[1] + "\n " + arr[2] + "\n " + arr[3]  );
// сделайте перебор объекта и выведите на консоль      
console.log("Объект" + "\n " + person.name + ' ' + person.lastName + "\n " + person.age + "\n " + person.year + "\n " + person.placeOfBirth + "\n " + person.gender);