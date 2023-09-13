const { log } = require('console');
const fs = require('fs')

// fs.readFile('Sample.txt', 'utf-8', function (err,data) {
//     console.log(data);
// })

// fs.writeFile('newSample.txt', 'hello new World', (err) => {
//     if (err)
//     {
//         console.log(err);
//     }
//     else {
//         console.log('file created');
//     }
// })

// fs.appendFile('append.txt', '\n hello hi hello', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file created");
//     }
// })

// fs.rename('./sample.txt', 'hello.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file renamed sucess hello.txt");
//     }
// })

fs.unlink('./newSample.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("file newsample is deleted");
    }
})