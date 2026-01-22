// function sayHello(){
//     console.log("Hi")
// }

// function doSomething(callBack){
//     console.log("I am doing something ...");
//     callBack();
// }
// doSomething(sayHello);

// const numbers = [1, 2, 3 ,4 ,5];
// const doubled = numbers.map(function(num) {
//     return num * 2;
// });
//  console.log(doubled);

// const evens = numbers.map(function(num){
//     return num%2 ==0;
// });
// console.log(evens) ;

// const even = numbers.filter(function(num){
//     return num%2 ==0;
// });

// console.log(even);

// const odds = numbers.filter(function(number){
//     return number %2 != 0;
// });
// console.log(odds);

// var http = require('http');
// var server = http.createServer(function(req, res){

//     var log = {
//         function info(info){
//             console.log('info:' + info);
//         },
//         function warning(warning){
//             console.log('warning: ' + warning)
//         }
//     }
// });

// server.listen(3000);
// module.exports = log

// for( i=0; i<6; i++){
//     console.log("Hello world");
// }

// const identity = {
//     names: 'blaise',
//     age : 30
// };

// for(let key in identity){
//     for(let value in identity){
//         console.log(key + " : " + value)
//     }
// }
// function walk(){
//     console.log("walking");

// }

// walk()
// console.log(walk());

// function createCircle(radius){
//     return {
//         radius ,
//         draw(){
//             console.log("draw")
//         }
//     }
// }
// console.log(createCircle(4));

//construcor function

function Identity(age){
    this.age = age,
    this.names = function(){
        console.log("Blaise");
    }
}
const blaise = new Identity(45);
console.log(blaise)
console.log(blaise.names())

//abstraction
 