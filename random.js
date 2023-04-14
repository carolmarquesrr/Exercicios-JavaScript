function aleatorioAte(n) {
    return Math.floor(Math.random() * (n + 1))
}
function aleatorioEntre(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

console.log(
    new Array(10).fill("h").map(e => aleatorioEntre(5, 15))
)