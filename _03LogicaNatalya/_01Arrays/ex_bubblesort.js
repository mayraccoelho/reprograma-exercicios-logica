//BUBBLE SORT
let lista = []
for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] > lista[j + 1]) {
        const aux = lista[j]
        lista[j] = lista[j + 1]
        lista[j + 1] = aux
      }
    }
  }
  console.log(lista)