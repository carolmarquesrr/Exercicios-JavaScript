let cidadesESiglas = new Map(
    [
        ['prt', 'Porto'],
        ['lsb', 'Lisboa'],
        ['acr', 'Açores']
    ]
);
let minutos = new Map(
    [
        [0, 'em ponto'],
        [1, 'e um'],
        [2, 'e dois']
    ]
);

let horas = new Map(
    [
        ["um", 'em ponto'],
        ["dois", 'e um'],
        [2, 'e dois']
    ]
);



horas.delete(0)
horas.set(2, "Substituiçao")


let meses = ["jan", "fev", "..."]
let messes = new Map([
    [1, "Janeiro"]
])
console.log(horas.entries())