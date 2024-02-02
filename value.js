let person = {
    name: 'Salamuddin',
    age: 20,
    profession: 'developer',
    salary: 2500,
    married: false,
    'fav places': ['bandarban','saintmartin','kuakata']
}

person.salary = 3000;
person['age'] = 26;
person['fav places'] = ['maldives','bali','pataya']
console.log(person);
const propname = 'profession';
person[propname] = 'devops';
console.log(person);