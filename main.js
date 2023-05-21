const shopContent = document.getElementById("shopContent")

const productos = [
    {
        id: 1,
        nombre: "Pancitos",
        precio: 100,
        img:
            "img/pancitos.jpg",
    },
    {
        id: 2,
        nombre: "Alfajorcitos de Maicena",
        precio: 250,
        img:
            "img/alfajorcitosdemaicena.jpg",
    },
    {
        id: 3,
        nombre: "Budines",
        precio: 400,
        img:
            "img/budines3.jpg",
    },
    {
        id: 4,
        nombre: "Bizcochuelo de Vainilla",
        precio: 800,
        img:
            "img/bizcochuelode vainilla.jpg",
    },
];

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    shopContent.append(content);
});