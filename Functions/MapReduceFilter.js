const products = [
  {
    name: "Smartphone Galaxy S21",
    desc: 'Tela 6.2", 128GB, 5G, Câmera Tripla',
    qtd: 4,
    price: 3499.0,
    totalValue: 0,
  },
  {
    name: "Notebook Dell Inspiron",
    desc: "Intel i5, 8GB RAM, SSD 256GB, Tela 15.6",
    qtd: 2,
    price: 4199.0,
    totalValue: 0,
  },
  {
    name: "Fone de Ouvido JBL Tune 510BT",
    desc: "Bluetooth, Som JBL Pure Bass, 40h de bateria",
    qtd: 6,
    price: 249.0,
    totalValue: 0,
  },
  {
    name: 'Smart TV LG 50"',
    desc: "4K UHD, webOS, HDR, Alexa e Google Assistente",
    qtd: 2,
    price: 2999.0,
    totalValue: 0,
  },
  {
    name: "Cadeira Gamer ThunderX3",
    desc: "Ergonômica, Reclinável, Apoio de Braço 2D",
    qtd: 3,
    price: 1999.0,
    totalValue: 0,
  },
  {
    name: "Mouse Logitech MX Master 3S",
    desc: "Ergonômico, Silencioso, USB-C, 8000 DPI",
    qtd: 0,
    price: 549.0,
    totalValue: 0,
  },
  {
    name: 'Monitor Samsung 24"',
    desc: "Full HD, 75Hz, 1ms, HDMI e VGA",
    qtd: 0,
    price: 699.0,
    totalValue: 0,
  },
  {
    name: "Teclado Mecânico Redragon Kumara",
    desc: "Switch Blue, RGB, ABNT2, Anti-Ghosting",
    qtd: 2,
    price: 238.0,
    totalValue: 0,
  },
];

const finalValue = products
  .map((prd) => {
    console.log("Chamou Map " + prd.name);
    prd.totalValue = prd.price * prd.qtd;

    return prd;
  })
  .filter((prd) => {
    console.log("Chamou Filter " + prd.name);
    if (prd.totalValue > 1000) {
      return prd;
    }
  })
  .reduce((acc, currentValue) => {
    console.log("Chamou Reduce " + acc);
    acc += currentValue.totalValue;
    return acc;
  }, 0);

console.log(finalValue.toFixed(2));
