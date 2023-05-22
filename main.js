const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Pancitos",
        precio: 500,
        img:
            "img/pancitos.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Alfajorcitos de Maicena",
        precio: 600,
        img:
            "img/alfajorcitosdemaicena.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Budines",
        precio: 800,
        img:
            "img/budines3.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Bizcochuelo de Vainilla",
        precio: 1200,
        img:
            "img/bizcochuelode vainilla.jpg",
        cantidad: 1,
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
    
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === prod.id){
                    prod.cantidad++;
                }
            });
        }else{

        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        }
    })
});

const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
            <P>Cantidad: ${product.cantidad}</p>
            <p>Total: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "🗑";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    pintarCarrito()
};