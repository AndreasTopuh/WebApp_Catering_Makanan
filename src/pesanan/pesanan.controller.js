const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const pesanan = await prisma.Pesanan.findMany();
  res.json(pesanan);
});

module.exports = router;