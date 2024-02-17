
// Задание 1
let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(`Сумма от 1 до 1000 - ${sum}`);

// Задание 2 Закоментил console.log которые использовались, для тестов.
let n = 1;
let factorial = Math.floor(Math.random() * (30 - 2 + 1) + 2);
// console.log(factorial);
for (let i = factorial; i > 0; i--) {
    n *= i;
}
console.log(`Факториал числа ${factorial} - ${n}`);

// Задание 3 Закоментил console.log которые использовались, для тестов.
let cycle = 0;
let mom = 1000;
let dad = 1200;
let count = 0
for (let i = 1; cycle <= 60000; i++) {
    cycle += mom;
    // console.log(cycle)
    cycle += dad * i;
    // console.log(cycle)
    count++;
}
// console.log(cycle);
console.log(`Через ${count} лет у Вити появится велосипед`);




// Задание 4 Добавил, пару похожих слов, для теста. Также закоментил console.log, как это было выше.
let word1 = "Огород";
let word2 = "шалаш";
let word3 = "манекенам";
let word4 = "манекеным";
function pollindrom(word) {
    let count_pol = 0;
    let out = true;

    while (out == true) {
        for (let h = 0, t = word.length - 1; h <= word.length, t >= 0; h++, t--) {
            // console.log(word[h],word[t]);
            if (word[h] === word[t]) {
                count_pol++;
                // console.log(count_pol);
            } else {
                console.log(`Слово ${word} не является полиндромом`);
                out = false;
                break;
            }
        }
        // console.log(count_pol);
        if (count_pol == word.length) {
            console.log(`Слово ${word} является полиндромом`);
            out = false;
        }
    }
    out = true;
}
pollindrom(word1);
pollindrom(word2);
pollindrom(word3);
pollindrom(word4);




// Задание 5, почему то консоль не отображается. Но если например убрать инициализацию переменой и сохранить файл, то все отображается коректно 
// Поэтому я закоментировал строку ниже
let random = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log(random);
let guess;
console.log(guess)
let exit = true;

while (exit) {
    guess = parseInt(prompt("Введите ваше число"));
    console.log(guess);
    if (guess === random) {
        console.log("Вы угадали!");
        exit = false;
    } else if (guess - 5 <= random && random <= guess + 5) {
        console.log("Горячо");
        console.log("Попробуйте еще");
    } else if (guess - 10 <= random && random <= guess + 10) {
        console.log("Тепло");
        console.log("Попробуйте еще");
    }
    else {
        console.log(" Холодно");
        console.log("Попробуйте еще");
    }

}

