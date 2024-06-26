const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
// const users = require("../users");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

const pelangganController = require("./pelanggan/pelanggan.controller"); 
app.use("/pelanggan", pelangganController);

const pesananController = require("./pesanan/pesanan.controller");
app.use("/pesanan", pesananController);

const menuController = require("./menu/menu.controller");
app.use("/menu", menuController);

const itemPesananController = require("./itempesanan/itemPesanan.controller");
app.use("/itempesanan", itemPesananController);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);