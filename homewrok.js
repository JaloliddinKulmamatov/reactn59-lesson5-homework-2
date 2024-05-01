//1

// function reversibleInclusiveList(startNum,endSNun) {
//     let newArr = [];
//     for (let i = startNum; i <= endSNun; i++) {
//         newArr.push(i) 
//     }
//     return newArr
// }

// console.log(reversibleInclusiveList(1,5));

//2

// function redundant(str) {
//     return function () {
//         return str
//     }
// }

// let f1 = redundant("apple")

// console.log(f1());


//3

// function add(num1) {
//    return function (num2) {
//     return num1 + num2
//     }
// }

// console.log(add(9)(1));

//4

// function addsNum() {
//     return function (num) {
//         return num + 1
//     }
// }

// let adds1 = addsNum(1)

// console.log(adds1(5.7));