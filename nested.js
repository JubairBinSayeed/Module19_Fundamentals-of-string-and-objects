const school = {
    name: 'Mastermind',
    class: ['10','11','12'],
    events: ['science fair ', 'bijoy dibosh'],
    unique:{
        speciality: false,
        result: {
            gpa: 5
        }
    }
}
// console.log(school.unique);
school.unique.result = true ;
console.log(school.unique.result);
// console.log(school);
delete school.class;
console.log(school);
