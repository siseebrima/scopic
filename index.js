const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let products = [
  {
    name: "Product No1",
    image: "https://source.unsplash.com/random",
    title: "product1",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: 16,
    close_time: "00:00:00",
    id: 1,
  },
  {
    name: "Product No2",
    image: "https://source.unsplash.com/random",
    title: "product2",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: 6,
    close_time: "00:00:00",
    id: 2,
  },
  {
    name: "Product No3",
    image: "https://source.unsplash.com/random",
    title: "product3",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    close_time: "00:00:00",
    last_bid: 16,
    id: 3,
  },
  {
    name: "Product No4",
    image: "https://source.unsplash.com/random",
    title: "product4",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    last_bid: "16",
    close_time: "00:00:00",
    id: 4,
  },
  {
    name: "Product No5",
    image: "https://source.unsplash.com/random",
    title: "product5",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: 16,
    close_time: "00:00:00",
    id: 5,
  },
  {
    name: "Product No6",
    image: "https://source.unsplash.com/random",
    title: "product6",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 1,
    close_time: "00:00:00",
    last_bid: 16,
    id: 6,
  },
  {
    name: "Product No7",
    image: "https://source.unsplash.com/random",
    title: "product7",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: 16,
    close_time: "00:00:00",
    id: 7,
  },
  {
    name: "Product No8",
    image: "https://source.unsplash.com/random",
    title: "product8",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: "30",
    close_time: "00:00:00",
    id: 8,
  },
  {
    name: "Product No9",
    image: "https://source.unsplash.com/random",
    title: "product9",
    description: "Lorem ipsum dolor sit amet consquo sequi ...",
    minimum_bid: 10,
    last_bid: 16,
    close_time: "00:00:00",
    id: 9,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello Scopic!</h1>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send(`the product you are looking for is not available`);
  }
});

app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  const product = products.find((p) => p.id === id);

  const newProduct = {
    ...product,
    last_bid: body.last_bid,
  };

  //   console.log(body);

  if (body.last_bid) {
    const updatedProducts = products.map((p) => (p.id === id ? newProduct : p));
    products = updatedProducts;

    // console.log(newProduct);
    res.status(202).end();
  }
});

const PORT = process.env.PPORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
