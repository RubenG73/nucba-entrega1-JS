const pizzas = [

    {
        id: 1,
        nombre: "Marinara",
        ingredientes: ["Salsa", " Ajo", " Oregano", " Aceite de oliva"],
        precio: 950,
    },

    {
        id: 2,
        nombre: "Margarita",
        ingredientes: ["Salsa", " Mozzarella", " Albahaca"],
        precio: 1330,
    },

    {
        id: 3,
        nombre: "Fugazzeta",
        ingredientes: ["Mozzarella", " Cebolla"],
        precio: 1520,
    },

    {
        id: 4,
        nombre: "Putanesca",
        ingredientes: ["Tomate", " Mozarella", " Anchoas", " Oregano"],
        precio: 1580,
    },

    {
        id: 5,
        nombre: "Calabresa",
        ingredientes: ["Salsa", " Longaniza", " Mozzarella"],
        precio: 1580,
    },

    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: ["Salsa", " Mozarella", " Pepperoni"],
        precio: 1850,
    },
]

pizzas.forEach( (pizza) => {
    if (pizza.id % 2 !== 0) {
        console.log(`La pizza ${pizza.nombre} tiene un id impar`)
    }
} )

const pizzaBarata = pizzas.some( function(e) {
    return e.precio <= 1000
}
);
console.log(pizzaBarata ? 'Hay pizzas mas baratas que de $1000': 'No hay pizzas con menor precio')

pizzas.forEach( (pizza) => {
    console.log(`La ${pizza.nombre} tiene un valor de: $${pizza.precio}`)
})

pizzas.forEach ((pizzas) => {
    console.log ('La pizza ' + pizzas.nombre, 'tiene los siguientes ingredientes: ' + pizzas.ingredientes,)
})