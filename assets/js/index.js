// capturamos elementos
let contProd = document.getElementById("contenedor-productos");
let cuerpoCarrito = document.getElementById("cuerpo-carrito");
let cantidadCarrito = document.getElementById("cantCar");
let btnMenos = document.getElementById("btn-menos");
let ComprarAhora = document.getElementById("c-total");


//botones para filtrar
let lap = document.getElementById('lap').onclick =function(){ filtrarProductos('laptop');}
let pc= document.getElementById('pc').onclick =function(){ filtrarProductos('computadora');}
let mouse = document.getElementById('mouse').onclick =function(){ filtrarProductos('mouse');}
let teclado = document.getElementById('teclado').onclick =function(){ filtrarProductos('teclado');}

// variables
let carrito = [];
let contadorProducto = 1;
carrito = JSON.parse(localStorage.getItem("car"));

const comprarTotal = () => {
  let total = 0;
  if (carrito.length > 1) {
    total = carrito.reduce((acc, b) => {
      return (acc += b.cantidad * b.precio);
    }, 0);
  } else if (carrito.length === 1) {
    total = carrito[0].cantidad * carrito[0].precio;
  }

  ComprarAhora.innerHTML = `
<hr>
<h4 class="pb-3">Total:   $ ${total}</h4>
<a href="./assets/page/purchase.html"> <button type="button" class="btn btn-warning fw-bold d-block mx-auto" onclick="purchase">Comprar Ahora</button></a> 
`;
return total;
};



const guardarStorage = () => {
  localStorage.setItem("car", JSON.stringify(carrito));
};

const crearCardProduct = (producto, index) => {
  let col = document.createElement("div");
  col.classList.add(
    "col-12",
    "col-sm-6",
    "col-md-6",
    "col-lg-4",
    "col-xl-3",
    "my-3",
    "d-flex",
    "justify-content-center"
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
    <p class="desc-prod">${producto.descripcion}</p>
    <div class="product-bottom-details">
        <div class="product-price">$ ${producto.precio}</div>
        <div class="product-links">
            
            <a class="fs-2 mx-2" onclick="agregarCarrito(${Number(producto.id)-1})"><i class="fa fa-shopping-cart"></i></a>
        </div>
    </div>
</div>
</div>
`;
  contProd.appendChild(col);
};

const renderizarProduct = async() => {
  const productosVenta = await obtenerData() ;
  productosVenta.map((producto, index) => {
    crearCardProduct(producto, index);
  });
};

renderizarProduct();



const agregarCarrito = async (index) => {
  let productosVenta = await obtenerData()
  


  let indiceEncontrado = carrito.findIndex(
    (producto) => producto.id === productosVenta[index].id
  );
  
// Desestructurando
const {nombre, cantidad} = productosVenta[index];

  if (indiceEncontrado === -1) {   
// Agregamos nueva propiedad cantidad para almacenar valor
    productosVenta[index].cantidad = 1;

    carrito.push(productosVenta[index]);
    guardarStorage();
    Swal.fire(
      'Excelente!',
      `${nombre} agregado al carrito`,
      'success'
    )
    renderizarCarrito(carrito);
    actualizarCantidadCarrito();
    
  } else {
   
    let nuevoIndice = carrito.findIndex(
      (producto) => producto.id === productosVenta[index].id
    );

    carrito[nuevoIndice].cantidad++;

    guardarStorage();
    renderizarCarrito(carrito);
    Swal.fire(
      'Info!',
      `El producto ${nombre} ya esta agregado al carrito!, Nueva cantidad: ${Number(carrito[nuevoIndice].cantidad) }!`,
      'info'
    )
    
  }
};

// redondo encima del carrito
const actualizarCantidadCarrito = () => {
 carrito != null &&  (cantidadCarrito.innerText = carrito.length);
 
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
  comprarTotal();
};

const masCantidad = (index) => {
  let producSearch = carrito.find((p) => p.id === index);
  producSearch.cantidad += 1;
  guardarStorage();
  renderizarCarrito(carrito);
};

const menosCantidad = (index) => {
  let producSearch = carrito.find((p) => p.id === index);
  // operador ternario
  producSearch.cantidad < 2 ? Swal.fire(
    'Alto!',
    'La cantidad mínima es 1!',
    'warning'
  ) :producSearch.cantidad--;
  guardarStorage();
  renderizarCarrito(carrito);
};

const deleteProduct = (index) => {
  let producSearch = carrito.findIndex((p) => p.id === index);
  carrito.splice(producSearch, 1);
  actualizarCantidadCarrito();
  guardarStorage();
  renderizarCarrito(carrito);
};

const cargarStorage = () => {
  if (carrito != null) {
    renderizarCarrito(carrito);
    actualizarCantidadCarrito();
  } else {
    carrito = [];
  }
};

cargarStorage();


const filtrarProductos = async(cat) => {
  let productosVenta = await obtenerData()
  let laptops = productosVenta.filter( prod => prod.categoria === cat)
  contProd.innerHTML = ''
  laptops.map((producto, index) => {
    crearCardProduct(producto, index);
  });
}












