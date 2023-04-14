// Implementa a função diferencaDiagonal que recebe uma matriz 
// quadrada e retorna a diferença absoluta entre as somas das diagonais.

function diferencaDiagonal(matriz) {

    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;

    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i]
        const valorDaDiagonalPrincipal = linha[i]
        const valorDaDiagonalSecundaria = linha[linha.length - 1 - i]

        diagonalPrincipal += valorDaDiagonalPrincipal
        diagonalSecundaria += valorDaDiagonalSecundaria

    }

    const diferenca = diagonalPrincipal - diagonalSecundaria
    return Math.abs(diferenca)
}


console.log(
    diferencaDiagonal([
        [3, 3, 3],
        [4, 8, 9],
        [1, 8, 9]
    ])  // 20 - 12 = 8

)
//     0   1   2
// 0           x

// 1       x

// 2   x




console.log(
    diferencaDiagonal([
        [3, 3, 3, 4, 5],
        [4, 8, 9, 1, 2],
        [1, 8, 9, 6, 2],
        [1, 3, 9, 1, 2],
        [1, 8, 4, 6, 2]
    ])  // 23 - 19 = 4
)