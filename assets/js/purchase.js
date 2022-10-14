let cuerpoCompra = document.getElementById("cuerpo-carrito-compra");
let btncomprar = document.getElementById("confirm-compra");
let totalCompra = document.getElementById("total-purchase");


let carrito = [];
carrito = JSON.parse(localStorage.getItem("car"));

const purchase = () => {
  cuerpoCompra.innerHTML = "";

if (carrito.length > 0) {
  carrito.map((carr) => {
    let row = document.createElement("div");
    row.classList.add("row", "border", "border-light", "rounded", "my-2");
    row.innerHTML = `
      
                           <div class="col-3">
                              <img class="img-fluid" src="${carr.img}" alt="">
                           </div>
                           <div class="col-9">
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


};

const montoTotal = () => {
  let total = 0;
  if (carrito.length > 1) {
    total = carrito.reduce((acc, b) => {
      return (acc += b.cantidad * b.precio);
    }, 0);
  } else if (carrito.length === 1) {
    total = carrito[0].cantidad * carrito[0].precio;
  }
  totalCompra.innerHTML = `<h3> Total: $ ${total}.00 </h3>
   <a href="/"> <button  class="btn btn-warning btn-block d-block mx-auto" style="width: 50%">
   Seguir Comprando
 </button> <a>
   `;
   return total;
};

const confirmarCompra = (e) => {
  e.preventDefault();
  let message = "";
 let name = document.getElementById("name").value;
  carrito.forEach(p =>{
    message += `${p.cantidad} ${p.nombre} ${p.precio} \n`;
   
  })



Email.send({
    SecureToken: "43003a87-015e-4071-ae9b-6620ada71735",
    To: document.getElementById("formEmail").value,
    From: "bralopezsuasnabar@gmail.com",
    Subject: "Pedido confirmado",
    Body: `Hola ${name} gracias por su compra: \n
          ${message} \n
           Total: ${montoTotal()} \n
           Vuelva pronto..`,
  });

  Swal.fire(
    'Compra realizada!',
    'gracias por su preferencia!, se le acaba de enviar un email(revise su correo no deseado), con las intrucciones de la compra.',
    'success'
  ).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      location.href ="/"
    }
  })


};

purchase();

btncomprar.addEventListener('submit', confirmarCompra)