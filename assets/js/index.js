// array de objetos
let productosVenta = [
  {
    id: 1,
    nombre: "Laptop HP 240 G8 Celeron N4020",
    precio: 1395,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/10/HP-240-G8-Celeron-N4020-1.jpg",
  },
  {
    id: 2,
    nombre: "Computadora HP Prodesk 600 G4 SFF",
    precio: 3000,
    img: "https://tiendastec.com.pe/wp-content/uploads/2019/10/HP-PRODESK-SFF-600.jpg",
  },
  {
    id: 3,
    nombre: "Mouse genius",
    precio: 120,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/04/Mouse-G203-Lightsync-Lila.jpg",
  },
  {
    id: 4,
    nombre: "Teclado Halion",
    precio: 80,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/09/Quasar-Outemu-Brown.jpg",
  },
];

// capturamos elementos
let contProd = document.getElementById("contenedor-productos");
let cuerpoCarrito = document.getElementById("cuerpo-carrito");
let cantidadCarrito = document.getElementById("cantCar");
let btnMenos = document.getElementById("btn-menos");

// variables
let carrito = [];
let contadorProducto = 1;

const crearCardProduct = (producto, index) => {
  let col = document.createElement("div");
  col.classList.add(
    "col-12",
    "col-sm-6",
    "col-md-6",
    "col-lg-4",
    "col-xl-3",
    "my-3"
  );
  col.innerHTML = `                   

<div class="product-card">
<div class="badges">Oferta</div>
<div class="product-tumb">
    <img src="${producto.img}" alt="">
</div>
<div class="product-details">
    <span class="product-catagory">Tecnologia - computo</span>
    <h4><a href="">${producto.nombre}</a></h4>
    <p class="desc-prod">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
    <div class="product-bottom-details">
        <div class="product-price">$ ${producto.precio}</div>
        <div class="product-links">
            
            <a class="fs-2 mx-2" onclick="agregarCarrito(${index})" href="#"><i class="fa fa-shopping-cart"></i></a>
        </div>
    </div>
</div>
</div>
`;
  contProd.appendChild(col);
};

const renderizarProduct = () => {
  productosVenta.map((producto, index) => {
    crearCardProduct(producto, index);
  });
};

renderizarProduct();

const agregarCarrito = (index) => {
  let indiceEncontrado = carrito.findIndex(
    (producto) => producto.id === productosVenta[index].id
  );

  if (indiceEncontrado === -1) {
    // contadorProducto = 1;
    productosVenta[index].cantidad = 1;
    carrito.push(productosVenta[index]);
    Swal.fire("Excelente!", "Producto agregado al carrito!", "success");
    renderizarCarrito(carrito);
    actualizarCantidadCarrito();
  } else {
    //  contadorProducto += 1;
    productosVenta[index].cantidad += 1;
    renderizarCarrito(carrito);

    console.log(carrito);
  }
};

// redondo encima del carrito
const actualizarCantidadCarrito = () => {
  cantidadCarrito.innerText = carrito.length;
};

const renderizarCarrito = (carrito) => {
  cuerpoCarrito.innerHTML = "";
  carrito.map((carr) => {
    let row = document.createElement("div");
    row.classList.add("row", "border", "border-light", "rounded", "my-2");
    row.innerHTML = `
    
                        <div class="col-5">
                            <img class="img-fluid" src="${carr.img}" alt="">
                        </div>
                        <div class="col-7">
                            <h5>${carr.nombre}</h5>
                            <p>$ ${carr.precio}</p>
                            <div>
                                <button id="btn-menos" class="btn btn-outline-warning px-2" onclick="menosCantidad(${carr.id})">-</button>
                                <input id="cantProd" type="text" class="text-center" value="${carr.cantidad}" style="width: 30%" disabled>
                                <button id="btn-mas" class="btn btn-outline-warning px-2" onclick="masCantidad(${carr.id})">+</button>
                                <button class="btn btn-outline-danger px-2" onclick="deleteProduct(${carr.id})">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    `;
    cuerpoCarrito.appendChild(row);
  });
};

const masCantidad = (index) => {
  let producSearch = carrito.find((p) => p.id === index);
  producSearch.cantidad += 1;
  renderizarCarrito(carrito);
};

const menosCantidad = (index) => {
  let producSearch = carrito.find((p) => p.id === index);

  if (producSearch.cantidad < 2) {
    alert("no se puede bajar mas de 1");
  } else {
    producSearch.cantidad--;
  }

  console.log(carrito);
  renderizarCarrito(carrito);
};


const deleteProduct = (index) => {

  let producSearch = carrito.findIndex((p) => p.id === index);

  carrito.splice(producSearch,1)
  actualizarCantidadCarrito();
  renderizarCarrito(carrito);

}