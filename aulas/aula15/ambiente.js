let num = [5, 8, 2, 9, 3]
console.log(num)
num.sort()
console.log(num)
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()

for (contador = 0; contador < num.length; contador += 1) {
    console.log(`O vetor na posição ${contador} é o: ${num[contador]}`)
}

console.log(`\nOutra forma...\n`)

for (contador in num){
    console.log(`O vetor na posição ${contador} é o ${num[contador]}`)
}



console.log(num.indexOf(0))