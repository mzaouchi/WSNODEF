const Multi=(a,b)=>{
    return a*b
}

// module.exports = Multi
module.exports.Multi = Multi
const Sous=(a,b)=>{
    return a-b
}

// module.exports = Sous
module.exports.Sous = Sous

console.log(module.exports)

// module.exports = {Multi,Sous}
// console.log(module.exports)