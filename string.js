
function apresentaPessoa(nome, idade) {
    if (!idade){
        return `O meu nome é ${nome}`
    } return `O meu nome é ${nome} e minha idade é ${idade}`

} 


console.log(
    apresentaPessoa("Carol", 29),
    // " O meu nome é Carol e tenho 28 anos"
    apresentaPessoa("Carol"),
)