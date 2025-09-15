export const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 999,
    description: "El iPhone más avanzado con chip A17 Pro y cámara de 48MP",
    category: "smartphones",
    image: "/celular.webp",
    stock: 10
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: 899,
    description: "Smartphone Android con IA integrada y pantalla AMOLED",
    category: "smartphones",
    image: "/celular.webp",
    stock: 15
  },
  {
    id: 3,
    title: "MacBook Pro M3",
    price: 1999,
    description: "Laptop profesional con chip M3 y pantalla Liquid Retina XDR",
    category: "laptops",
    image: "/laptop.jpg",
    stock: 8
  },
  {
    id: 4,
    title: "Dell XPS 13",
    price: 1299,
    description: "Ultrabook premium con pantalla InfinityEdge y procesador Intel",
    category: "laptops",
    image: "/laptop.jpg",
    stock: 12
  },
  {
    id: 5,
    title: "iPad Air",
    price: 599,
    description: "Tablet versátil con chip M2 y pantalla Liquid Retina",
    category: "tablets",
    image: "/tablet.jpg",
    stock: 20
  },
  {
    id: 6,
    title: "Samsung Galaxy Tab S9",
    price: 799,
    description: "Tablet Android premium con S Pen incluido",
    category: "tablets",
    image: "/tablet.jpg",
    stock: 6
  }
];

export const categories = [
  { id: "smartphones", name: "Smartphones" },
  { id: "laptops", name: "Laptops" },
  { id: "tablets", name: "Tablets" }
];

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = () => {
  return delay(1000).then(() => products);
};

export const getProductsByCategory = (categoryId) => {
  return delay(1000).then(() => {
    if (categoryId === "all") {
      return products;
    }
    return products.filter(product => product.category === categoryId);
  });
};

export const getProductById = (id) => {
  return delay(1000).then(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  });
};
