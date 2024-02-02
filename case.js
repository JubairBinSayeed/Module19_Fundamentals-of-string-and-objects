const school = `RAJ UK Uttara model school`;

console.log(school.toLowerCase());
console.log(school.toUpperCase());

// const subject = `Chemistry`;
// const book =`chemISTRY`;

// if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
//     console.log(`I am reading book so that I can do well in exam `)
// }
// else{
//     console.log(`for no reason keep changing the next page and keep waiting for dinner`)
// }
const trim = `water`;
const drinks = `    water       `;

if(trim.trim() === drinks.trim()){
    console.log('Water s other name is life .')
}
else{
    console.log('there is water but we cannot drink it because of the salt init.')
}