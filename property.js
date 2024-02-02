const person = {
    name: 'Salamuddin',
    age: 20,
    profession: 'developer',
    salary: 2500,
    married: false,
    'fav places': ['bandarban','saintmartin','kuakata']
}

// console.log(person);

// dot notation
// dot symbol diye er property access kora
console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation 
// third bracket diye access kora
console.log(person['age']);
const boyos = person['age'];
console.log(boyos); 

// error
// console.log(person.'fav place')

