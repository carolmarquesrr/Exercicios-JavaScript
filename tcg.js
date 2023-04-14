// Cria a função `converteHacker` que recebe uma string e retorna uma string, semelhante mas que subsitui alguns dos seus caráteres de modo a que se pareça linguagem Hacker.

// Desafio extra: Evitar a utilização de `if`.

// **Letras a ser substituídas:**

// 1. a ou A -> 4
// 2. e ou E -> 3
// 3. i ou I -> 1
// 4. o ou O -> 0
// 5. s ou S -> 5




// function converteHacker(string) {
//     let stringResposta = "";
//     for (let i = 0; i < string.length; i++) {
//         const caracter = string[i]

//         if (caracter === "a" || caracter === "A") {
//             stringResposta += "4"
//             continue
//         }
//         if (caracter === "e" || caracter === "E") {
//             stringResposta += "3"
//             continue
//         }
//         if (caracter === "i" || caracter === "I") {
//             stringResposta += "1"
//             continue
//         }
//         if (caracter === "o" || caracter === "O") {
//             stringResposta += "0"
//             continue
//         }
//         if (caracter === "s" || caracter === "S") {
//             stringResposta += "5"
//             continue
//         }

//         stringResposta += caracter

//     }
//     return stringResposta
// }

// function converteHacker(string) {
//     let resposta = ""
//     const possibilidades = [
//         ["a", "A"],
//         ["e", "E"],
//         ["i", "I"],
//         ["o", "O"],
//         ["s", "S"]
//     ]
//     const referencia = ["4", "3", "1", "0", "5"]

//     for (let i = 0; i < string.length; i++) {
//         const caracter = string[i]

//         //Encontrar uma possibilidade que inclua o caracter atual e retornar o seu indice
//         const indiceReferencia = possibilidades.findIndex(
//             parDePossibilidades => parDePossibilidades.includes(caracter)

//         )

//         resposta += referencia[indiceReferencia] ?? caracter
//     }

//     return resposta
// }

// function converteHacker(string) {
//     return string.replace(/(a|A)/g, 4)
//         .replace(/(S|s)/g, "5")
//         .replace(/(E|e)/g, "3")
//         .replace(/(I|i)/g, "1")
//         .replace(/(O|o)/g, "0")
// }
function converteHacker(string) {
    const arrayDaString = string.split("")
    const arrayDeResposta = [];
    for (let i = 0; i < arrayDaString.length; i++) {
        const caracter = arrayDaString[i]

        arrayDaString[i] = caracter.replace("S", "5")
    }
    console.log(arrayDaString)
}

let frase = 'Sou um Hacker'
console.log(
    converteHacker(frase)
)
// 50u um H4ck3r

converteHacker('O elefante voou')
// 0 3l3f4nt3 v00u
