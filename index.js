let myName = `Je m'appelle "Hassan"`;
let mySpace = ' ' ;
const age = 19;
let modifiedAge = age + 5;
const lastname = 'Mohammadi';
let myName2 = myName + mySpace + lastname ;
myName += ', ' + modifiedAge + 'ans.';

const resultStr = `${myName} et j'ai ${modifiedAge} ans.`;

console.log(resultStr);

//نوع داده ی بولن در جاوا اسکریپت

const myBoolean = true;
const myBoolean1 = false;

if (myBoolean1){
    console.log('i pass my course in la poscine.');
}
console.log ('i finish my courses.');

let myAge = 90;
const middleAge = 18 ;

const minor = myAge >= middleAge ;

if (minor) {
    console.log("He is not minor")
}
else {
    console.log("He is minor")
}
//here we use the Minor value to start a if so we can write that if age>=middleage you can print the console.log inside the{ } esle or if not you can print out of {} or else {''}

const bigN1 = 100
const bigN2 = 200

const resultConparison = bigN1 > bigN2 

if (resultConparison){
    console.log (bigN1)
}
else {
    console.log(bigN2)
}
// this how we can show the bigger number from two valuer 
/**
 * if (bigN1 > bigN2){
 * console.log(bigN1)
 * }else if (bigN1 < bigN2){
 * console.log(bigN2)
 * }esle if (bigN1 == bigN2) {
 * console.log(bigN1 , bigN2)
 * }
 */
let arr1 = [0 , 3 , 4 , 'hello', false , 55 , 'world!']
let arreyResult2 

if (arr1[4]){
    arreyResult2 = `${arr1[3]}  ${arr1[6]}`
} else {
    arreyResult2 = arr1[2] + arr1[5]
}
 console.log(arreyResult2)

 



