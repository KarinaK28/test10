console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);




const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
else {console.log(hamburger && cola || fries === 3 && nuggets)}


let result = '';
const length = 5;
for (let i = 0; i < length; i++) {
    for (let j = 5; j > i; j--) {
        result += '*';
    }
    for (let k = 1; k < i+2; k++) {
       
            result += '#';
      
       
    }

    result +='\n';
}
console.log(result)

let result1 = '';
const length1 = 14;
for (let i = 1; i < length1; i++) {
    if (i <= 6) {
        for (let j = 0; j < i; j++) {
         result1 += '*';
    }}
    
    result1 +='\n';
} 
console.log(result1)




// Место для первой задачи
function firstTask() {
    for (i = 5; i <= 10; i ++)
        { console.log(i);}
    }
    firstTask();
    
    // Место для второй задачи
    function secondTask() {
        // Пишем решение вот тут
        for (i = 20; i > 0; i --)
        { if (i == 13) {
            break;
        }
            console.log(i);}
        
    }
    secondTask();
    



    // Место для третьей задачи
    function thirdTask()  {
        // Пишем решение вот тут
        for (i = 1; i <= 10; i ++)
        { if (i % 2 !== 0) {
            continue;
        } else {
            console.log(i);}
        
    }}
    
    thirdTask();
    // Место для четвертой задачи
    
    // Цикл, который нужно переписать:
    
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
    
    function fourthTask() {
        // Пишем решение вот тут
        let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
        
    }
    fourthTask() ;
    
    // Место для пятой задачи
    
    function fifthTask() {
        const arrayOfNumbers = [];
    
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
    }
    fifthTask();



    // Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
      for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
    
    // Не трогаем
    return result;
}
firstTask();
// Место для второй задачи
  function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;

}}
    // Пишем решение вот тут
    
console.log(data);
    
    // Не трогаем
    return data;
}


secondTask();

// Место для третьей задачи
  function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 1 ; i <= data.length; i++) {
    result[i-1] = data[data.length - i];  // Пишем решение вот тут
 }   console.log(result);
        // Не трогаем
    return result;
}

thirdTask();


const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += "1";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
 }

     result += "\n";
}

console.log(result)