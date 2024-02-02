const mobile = {
    brand: 'samsung',
    price: 40000,
    color: 'cyan',
    camera: '50mpx',
    screen: 'OLED'
}

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop])
}



const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,mobile[key]);
}