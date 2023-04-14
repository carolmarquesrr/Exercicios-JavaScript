// function escadaComCardinais(n) {
//     let escada = "";

//     //
//     for (let linha = 0; linha < n; linha++) {
//         const quantidadeDeEspacos = n - 1 - linha
//         const quantidadeDeCardinais = 1 + linha
//         escada += criaString(quantidadeDeCardinais, "#")
//         escada += criaString(quantidadeDeEspacos, " ")
//         escada += linha < n - 1 ? "\n" : ""
//     }

//     return escada
// }
function escadaComCardinais(n) {
    let escada = [];

    for (let linha = 0; linha < n; linha++) {
        escada.push(`${criaString(n - 1 - linha, " ")}${criaString(1 + linha, "#")}`)
    }

    return escada
}

//ciclo vai do 0 -> 5
//1 preencher + "\n"
//2 preencher + "\n"
//3 preencher + "\n
//4 preencher + "\n"
//5 preencher + "\n"
//6 preencher 

console.log(
    escadaComCardinais(6)
)
//      #
//     ##
//    ###
//   ####
//  #####
// ######

console.log("________________")

console.log(
    escadaComCardinais(5)
)
//      #
//     ##


function criaString(comprimento, caracter) {
    let string = ""

    for (let i = 0; i < comprimento; i++) {
        string += caracter
    }

    return string
}

function criaString2(comprimento, caracter) {
    return new Array(comprimento).fill(caracter).join("")
}
function criaString3(comprimento, caracter) {
    return caracter.repeat(comprimento)
}

    // for (let linha = 1; linha <= n; linha++) {
    //     const quantidadeDeEspacos = n - linha
    //     escada += criaString(quantidadeDeEspacos, ".")
    //     escada += linha < n ? "\n" : ""
    // }
