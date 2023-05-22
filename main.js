const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

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
    content.className = "card"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);
    
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product,id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
    })
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritocontent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
        `;

        modalContainer.append(carritocontent)
    })
});