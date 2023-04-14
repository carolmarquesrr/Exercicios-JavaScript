// Implementa a função minMax que recebe
//  um array e um número e retorna um array com o valor
//   mínimo e máximo que é possível obter pela soma de n dos elementos do array.

//[x] - Ordenar o array
//[ ] - Somar os primeiros n elementos
//[ ] - Somar os últimos n elementos
//[ ] - Retornar [somaMenor, somaMaior]

function minMax(array, n) {
    let min = 0;
    max = 0;
    const arrayOrdenado = array.sort((a, b) => a - b)

    // for (let i = 0; i < n; i++) {
    //     min += arrayOrdenado[i]
    // }

    // for (let i = array.length - 1; i >= array.length - n; i--) {
    //     max += arrayOrdenado[i]
    // }

    for (let i = 0; i < n; i++) {
        min += arrayOrdenado[i]
        max += arrayOrdenado[arrayOrdenado.length - 1 - i]
    }


    return [min, max];
}

console.log(
    minMax([1, 2, 3, 4, 5], 4) // [10, 14]
)
minMax([1, 2, 3, 4, 5], 2) // [3, 9]



    // let ordered = false;
    // while (!ordered) {
    //     ordered = true;
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] > array[i + 1]) {
    //             let temp = array[i]
    //             array[i] = array[i + 1]
    //             array[i + 1] = temp
    //             ordered = false;

    //             // [array[i], array[i + 1]] = [array[i + 1], array[i]]
    //         }
    //     }
    // }