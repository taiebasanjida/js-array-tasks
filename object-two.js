

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger city"]=5
console.log(car);

// 
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);

// 

let person = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let propertyCount=Object.keys(person).length
console.log(propertyCount);

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for(let property in myObject){
    let value = myObject[property]
    console.log(`${property},${value},${typeof value}`);
    
}