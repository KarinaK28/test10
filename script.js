'use strict';

fetch('./dbHeroes.json')
    .then(response => response.json())
    .then(data => practice(data))
    .catch(err => console.error(err));


function practice(response) {
const allHeroes = [];

response.forEach(item => allHeroes.push(item.name));
console.log(allHeroes);
}





const mix = [54, 'fff', 55, -5, 'fdfvbgfv'];

mix.forEach(function(item, index, mix){
    console.log(item, index)
})

const arr = [1, 2, 3]
console.log(arr[1]);

const arrObj = {
    name1: 'AS',
    1: 'j',
    '3gg': 'jmjj',
    5: 'uj'
};


const storeName = 'Lada';
const storeDescription = {
    budget: 10000,
    employees: ['Karina', 'Ivan', 'Anna'],
    products: {
        phone: 10000,
        headset: 200
    },
    open: true
};


const test ='f';
arrObj[test] = 'rrr';
arrObj.f = 7;
///console.log(arrObj[dd]);
//console.log(arrObj);
console.log(arrObj);
console.log(arrObj[name1]);
console.log(arrObj['1']);
console.log(arrObj['name1']);
console.log(arrObj['a']);
console.log(arrObj['3gg']);
console.log(arrObj.a);

console.log(4 + 5);