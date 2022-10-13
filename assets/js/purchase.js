

let cuerpoCompra = document.getElementById("cuerpo-carrito-compra")
let totalCompra = document.getElementById("total-purchase")
let carrito = [];
carrito = JSON.parse(localStorage.getItem("car"));

const purchase = () => {
    cuerpoCompra.innerHTML = "";
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
                                  
                                  <h5>Cantidad: ${carr.cantidad}</h5>
                                 
                                 
                              </div>
                              
                           </div>
                           
                   `;
                      cuerpoCompra.appendChild(row);
    });
  montoTotal();
  }

  const montoTotal = () => {
   let total = 0;
   if (carrito.length > 1) {
     total = carrito.reduce((acc, b) => {
       return (acc += b.cantidad * b.precio);
     }, 0);
   } else if (carrito.length === 1) {
     total = carrito[0].cantidad * carrito[0].precio;
   }
   totalCompra.innerHTML = `<h3> Total: $ ${total}.00 </h3>`  
  }
  
  purchase()