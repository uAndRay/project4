// 9 zadanie
let name = "Andrey";
console.log("Привет, " + name + "!")

// 10 zadanie
function isEven(number) {
    return number % 2 === 0
}
console.log(isEven(6))

// 11 zadanie
let person = {
    name: "Andrey",
    age: 17,
    city: "Veliky Novgorod"
}
console.log(`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}`)

// 12 zadanie
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let summa = 0
array.forEach(element => {
    summa += element;
    console.log(summa)
});
console.log(`Наша сумма равна: ${summa}`)

// 5 zadanie
let car = {
    make: "Mercedec",
    model: "S-class",
    year: 2009
}
let pravilniyYear = new Date().getFullYear();
function text(object) {
    if(typeof(object.year) == 'string' || object.year > pravilniyYear) {
        console.log(`У машины марки ${object.make} некорректно указан год выпуска`)
    } else {
        console.log(`Я езжу на машине марки ${object.make} модель которой является ${object.model}, выпущенную в ${object.year} году`)
    }
}
text(car)