// array de objetos
let productosVenta = [
  {
    id: 1,
    nombre: "Laptop HP 240 G8 Celeron N4020",
    precio: 1395,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/10/HP-240-G8-Celeron-N4020-1.jpg",
    descripcion: "Laptop HP 240 G8 Celeron N4020, sigue el ritmo de estilos de trabajo móviles gracias a un diseño delgado y ligero. "
  },
  {
    id: 2,
    nombre: "Computadora HP Prodesk 600 G4 SFF",
    precio: 3000,
    img: "https://tiendastec.com.pe/wp-content/uploads/2019/10/HP-PRODESK-SFF-600.jpg",
    descripcion: "Poderosas opciones potencie su día, con los procesador Intel® Core ™ i7 de 8va generación de alto rendimiento, desatados por la tecnología optativa Intel® Optane ™."
  },
  {
    id: 3,
    nombre: "Mouse genius",
    precio: 120,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/04/Mouse-G203-Lightsync-Lila.jpg",
    descripcion: "Mouse RGB ¡Tú decides! Incluso puedes sincronizar tu mouse con otros dispositivos y accesorios Logitech G LIGHTSYNC para lograr la combinación perfecta."
  },
  {
    id: 4,
    nombre: "Teclado Halion",
    precio: 80,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/09/Quasar-Outemu-Brown.jpg",
    descripcion: "Tal como en sus inicios, nació listo para el combate. El poder de ambas presentaciones, Black & White edition incrementa la energía quasiestelar que yace en el legendario corazón de los gamers."
  },
  {
    id: 5,
    nombre: "Laptop Lenovo V14",
    precio: 2000,
    img: "https://tiendastec.com.pe/wp-content/uploads/2020/10/LAPTOP-LENOVO-V14-IIL-I5-1035G1-3.jpg",
    descripcion: "Laptop Lenovo V14-IIL |Core i5-1035G1 | 1TB HDD |Memoria RAM 8GB | (82C400EELM) | Pantalla 14″ HD (1366×768) | laptop Oficinista"
  },
  {
    id: 6,
    nombre: "Laptop Asus TUF",
    precio: 3500,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/08/LAPTOP-ASUS-FX506LH-HN100-I7.jpg",
    descripcion: "Laptop Asus TUF F15, Diseñado para juegos serios y durabilidad en el mundo real, el TUF Gaming F15 es un portátil para juegos con Windows 10 Pro."
  },
  {
    id: 7,
    nombre: "Mouse Genius NX-7015",
    precio: 30,
    img: "https://tiendastec.com.pe/wp-content/uploads/2020/11/Mouse-inalambrico-Genius-NX-7015.jpg",
    descripcion: "La tecnología anti-interferencia bidireccional de 2.4GHz le asegurará una distancia de trabajo de hasta 10 metros."
  },
  {
    id: 8,
    nombre: "Laptop MSI Katana",
    precio: 4000,
    img: "https://tiendastec.com.pe/wp-content/uploads/2022/02/Laptop-MSI-Katana-11UC.jpg",
    descripcion: "Con el nuevo procesador 11a Gen. Intel® Core™ i7 y gráficos NVIDIA® GeForce RTX™ , Katana 11UC ,está optimizada para liberar un verdadero desempeño durante el juego."
  },
  {
    id: 9,
    nombre: "Teclado Redragon MAGIC",
    precio: 90,
    img: "https://tiendastec.com.pe/wp-content/uploads/2022/08/Teclado-Redragon-MAGIC-WAND-K587-tiendas-tec.jpg",
    descripcion: "Elegancia incomparable. La estructura del Magic Wand tiene una altura de sólo 2,8 cm (en comparación, el Kumara tiene 4,3 cm). Un rasgo que le aporta mucho estilo a este TKL premium."
  },
  {
    id: 10,
    nombre: "Computadora AMD Ryzen 9",
    precio: 5000,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/10/AMD-Ryzen-95900X.jpg",
    descripcion: "AMD Ryzen 9 5900X | Computador Alta Gama | Placa: Asus TUF B550M-PLUS WIFI GAMING AMD/AM4/DDR4 |  Memoria RAM: T-FORCE DELTA BLACK RGB 32GB/DDR4/3200."
  },
  {
    id: 11,
    nombre: "Computadora Intel ",
    precio: 1500,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/08/Computadora-core-i3-10105.webp",
    descripcion: "Core i3-10105 | Memoria RAM 4GB | Disco Duro 1TB | Pantalla 18.5″ | PC Completo."
  },
  {
    id: 12,
    nombre: "Mouse Antryx Chrome Storm",
    precio: 80,
    img: "https://tiendastec.com.pe/wp-content/uploads/2021/05/MOU-ANTRYX-CHROME-STORM-M750.jpg",
    descripcion: "El diseño ergonómico y la superficie de revestimiento de goma brindan comodidad y un mejor agarre para los estilos de agarre para diestros y zurdos."
  },
];

// capturamos elementos
let contProd = document.getElementById("contenedor-productos");
let cuerpoCarrito = document.getElementById("cuerpo-carrito");
let cantidadCarrito = document.getElementById("cantCar");
let btnMenos = document.getElementById("btn-menos");
let ComprarAhora = document.getElementById("c-total")

// variables
let carrito = [];
let contadorProducto = 1;



const comprarTotal = () => {
let total =0
  if (carrito.length > 1) {
    total =  carrito.reduce((acc,b)=>{
       return acc += b.cantidad * b.precio},0)
  }
  else if (carrito.length === 1) {
    total = carrito[0].cantidad * carrito[0].precio
  }



ComprarAhora.innerHTML = `
<hr>
<h4 class="pb-3">Total:   $ ${total}</h4>
<button type="button" class="btn btn-warning fw-bold d-block mx-auto">Comprar Ahora</button>
`
}


const guardarStorage = () => {
  localStorage.setItem('car',JSON.stringify(carrito))
}

const crearCardProduct = (producto, index) => {
  let col = document.createElement("div");
  col.classList.add(
    "col-12",
    "col-sm-6",
    "col-md-6",
    "col-lg-4",
    "col-xl-3",
    "my-3", "d-flex", "justify-content-center"
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
            
            <a class="fs-2 mx-2" onclick="agregarCarrito(${index})"><i class="fa fa-shopping-cart"></i></a>
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
    guardarStorage();
    Swal.fire("Excelente!", "Producto agregado al carrito!", "success");
    renderizarCarrito(carrito);
    actualizarCantidadCarrito();
  } else {
    //  contadorProducto += 1;
    productosVenta[index].cantidad += 1;
    guardarStorage();
    renderizarCarrito(carrito);

    //console.log(carrito);
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

  if (producSearch.cantidad < 2) {
    alert("no se puede bajar mas de 1");
  } else {
    producSearch.cantidad--;
  }

  //console.log(carrito);
  guardarStorage();
  renderizarCarrito(carrito);
};


const deleteProduct = (index) => {

  let producSearch = carrito.findIndex((p) => p.id === index);

  carrito.splice(producSearch,1)
  actualizarCantidadCarrito();
  guardarStorage();
  renderizarCarrito(carrito);
  
}

const cargarStorage= () => {
  carrito = JSON.parse(localStorage.getItem('car'))
  renderizarCarrito(carrito)
  actualizarCantidadCarrito();

}

cargarStorage();