// Exercício Extra:
// matriz 5x5
const arr = []
let count = 1
for (let i = 0; i < 5; i++) {
  const linha = []
  for (let j = 0; j < 5; j++) {
    linha[j] = count
    count++
  }
  arr[i] = linha
}
console.log(arr)