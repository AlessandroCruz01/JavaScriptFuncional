let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
console.log(roots); // roots é [1, 2, 3], numbers ainda é [1, 4, 9]

const products = [
  {
    name: "Smartphone Galaxy S21",
    desc: 'Tela 6.2", 128GB, 5G, Câmera Tripla',
    price: 3499.0,
  },
  {
    name: "Notebook Dell Inspiron",
    desc: 'Intel i5, 8GB RAM, SSD 256GB, Tela 15.6"',
    price: 4199.0,
  },
  {
    name: "Fone de Ouvido JBL Tune 510BT",
    desc: "Bluetooth, Som JBL Pure Bass, 40h de bateria",
    price: 249.0,
  },
  {
    name: 'Smart TV LG 50"',
    desc: "4K UHD, webOS, HDR, Alexa e Google Assistente",
    price: 2999.0,
  },
  {
    name: "Cadeira Gamer ThunderX3",
    desc: "Ergonômica, Reclinável, Apoio de Braço 2D",
    price: 1999.0,
  },
  {
    name: "Mouse Logitech MX Master 3S",
    desc: "Ergonômico, Silencioso, USB-C, 8000 DPI",
    price: 549.0,
  },
  {
    name: 'Monitor Samsung 24"',
    desc: "Full HD, 75Hz, 1ms, HDMI e VGA",
    price: 699.0,
  },
  {
    name: "Teclado Mecânico Redragon Kumara",
    desc: "Switch Blue, RGB, ABNT2, Anti-Ghosting",
    price: 238.0,
  },
];

const lowValues = products.map((product) => {
  if (product.price < 1000) {
    product.price = product.price * 2;
  }
  return product;
});

console.log(lowValues);

const descriptions = products.map((product) => product.desc);
console.log(descriptions);
