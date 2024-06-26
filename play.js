const product = (a,b) => a*b;

console.log(product(5,10));

const student = {
    name: "ritik",
    age: 22,
    greet() {
         console.log('Hi, I am ' + this.name);
    }
}

student.greet();