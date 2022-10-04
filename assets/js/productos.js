// array de objetos
let productosVenta = []


let productos1 = [
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
  
  ];


  let productos2 = [
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


  ]

  productosVenta = [...productos1, ...productos2]