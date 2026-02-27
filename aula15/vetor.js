let num = [5, 2, 1, 4, 9]

for (let i in num) {
    // console.log(num[i])
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// OU

for (let pos = 0; pos < num.length; pos++) {
    // console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(5)) 
console.log(num.indexOf(7))