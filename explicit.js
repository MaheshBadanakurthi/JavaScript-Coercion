var x=121;
var y='123';
if(x==y){
    console.log('both are equal')
}
else{
    console.log('both are not equal')
}

let z=x+y;
let a=x-y;  // here system default converted string(123) to number(123). its called Implicit coercion
var a=Number(y); // here we converted string to number   its called Explicit Coercion.
console.log(typeof a)
// console.log(z,'both are added');  // concatination
// console.log(a,"bot are not added");
