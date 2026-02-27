let num = [5, 2, 1]
console.log(num)

// Adiciona um elemento na posição exata
num[3] = 6;
console.log(num)

// Adiciona um elemento na última posição
num.push(7)
console.log(num)

console.log(`O vetor tem ${num.length} elementos`)

console.log(`O vetor em ordem crescente é [${num.sort()}]`)