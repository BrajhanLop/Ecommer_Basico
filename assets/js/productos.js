


async function obtenerData() {
  // let respuesta = await fetch('data.json');
  let respuesta = await fetch('https://api.jsonbin.io/v3/b/6344358a65b57a31e691a42a');
  const data = await respuesta.json();
  const prod = await data.record;
  // console.log(data);
  return prod
}




  

