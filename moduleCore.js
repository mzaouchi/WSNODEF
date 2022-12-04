// const fs = require('fs')

// console.log('Start')
// fs.readFile('./A.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)

//     }
// })

// console.log(fs.readFileSync('./A.txt','utf8'))

// console.log('Finish')

const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Achref Moez</h1>')
    res.end()
}).listen(5000,console.log('Ya brahim e server raho yemchi'))
