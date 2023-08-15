const menu = {
    cafe: {
        descricao: "Café",
        valor: 3.00
    },
    suco: {
        descricao : "Suco",
        valor: 1.50
    },
    sanduiche: {
        descricao : "Sanduíche",
        valor: 6.50
    },
    salgado: {
        descricao : "Salgado",
        valor: 7.25
    },
    combo1: {
        descricao : "Combo1",
        valor: 9.50
    },
    combo2: {
        descricao : "Combo2",
        valor: 7.50
    },
}
const extras = {
    chantily:{
        descricao: "Chantily (extra do Café)",
        valor: 1.50,
        itemPrincipal: menu.cafe
    },
    queijo:{
        descricao: "Queijo (exta do Sanduíche)",
        valor: 2.00,
        itemPrincipal: menu.sanduiche
    }
}

export { menu, extras }