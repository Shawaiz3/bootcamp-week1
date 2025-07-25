// //Task 1

function greet(name) {
    return `Hello, ${name}`
}

const customArgs = process.argv.slice(2);

customArgs.forEach(el=>{
    console.log(greet(el))
})

// [
//     'shahzeb',
//     'sharif',
//     'shahwaiz',
// ].forEach(el=>{
//     console.log(greet(el))
// })


