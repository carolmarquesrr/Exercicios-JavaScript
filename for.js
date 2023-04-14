// let string = "";

// while (string.length < 10) {
//     console.log("Adicionei uma letra à string")
//     //Código
//     string += "a"
// }

//Traduzindo o while para For Loop
// for (inicio; fim; meio) 


// for (let string = ""; string.length < 10; string += "a") {
//     // Instruções a executar enquanto i for menor que 10
//     console.log("Adicionei uma letra à string")
// }
// for (let string = ""; string.length < 10; string += "b") {
//     // Instruções a executar enquanto i for menor que 10
//     console.log("Adicionei uma letra à string")
//     string += "a"
// }

// let string = ""
// for (undefined; string.length < 10; undefined) {
//     console.log("Iteração")
//     string += "a"
// }




let valorEspecifico = 12
for (let i = 0; i < 10; i++) {
    console.log("1")
    if (i === valorEspecifico / 2) {
        break;
    }
    console.log("2")
}

//i === 0
//1 2

// i === 1
//1 2

// i === 2
// 1 2

// i === 3
// 1 2

// i === 4
// 1 2

// i === 5
// 1 2

// i === 6
// 1





// let i, j

// for (
//     i = 0, j = 0;
//     i < 10 && j < 10;
//     i++, j += 3
// ) {
//     console.log("Iteração")
// }





/*
s === ""
A string tem menos de 10 caracteres? Sim

console.log("Adicionei uma letra à string")
string += "a"

s === "a"
string += "b"

s === "ab"
A string tem menos de 10 caracteres? Sim

console.log("Adicionei uma letra à string")
string += "a"

s === "aba"

string += "b"

s === "abab"

*/





// let valorEspecifico2 = 6
// for (let i = 0; i < 5; i++) {
//     console.log("1")
//     const resultadoA = funcao()
//     if (i >= valorEspecifico / 2) {
//         continue;
//     }
//     const resultadoB = outraFuncao()
//     console.log("2")
// }

//i === 0
//1 2

// i === 1
//1 2

// i === 2
// 1 2

// i === 3
// 1

// i === 4
// 1



let soma = 0;
for (let i = 0; i < 10; i++) {
    if (soma >= 10) {
        break;
    }
    soma += i;
}

//i = 0
//soma = 0

//i = 1
//soma = 0

//i = 2
//soma = 1

//i = 3
//soma = 3

//i = 4
//soma = 6

//i = 5
//soma = 10