const name = "Melissa";
const weight = 53;
const height = 1.60;
const sex = "Female"

const imc = weight / (height * height);

if (imc >= 30) {
    console.log(`${name}, you are overweight.`)
} else {
    console.log(`${name}, you are not overweight.`)
}
