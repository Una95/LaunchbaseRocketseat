const name = 'João';
const age = 65;
const sex = 'M';
const contribution = 20;

const sum = age + contribution

if (sex == 'F'){
    if (sum >= 85) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't retire yet!`)
    }
} else {
    if (sum >= 95) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't retire yet!`)
    }
}