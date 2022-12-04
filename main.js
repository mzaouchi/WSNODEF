// console.log('Hello Asma')

// function Sum(a,b){
//     return a+b
// }

// console.log(Sum(3,5))
// console.log(Sum(7,5))

// console.log(process.argv)

// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Sum(+process.argv[2],+process.argv[3]))

const  obj = require('./moduleLocal')
// const Sous = require('./moduleLocal')

console.log(obj.Multi(+process.argv[2],+process.argv[3]))
console.log(obj.Sous(+process.argv[2],+process.argv[3]))
