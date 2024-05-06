const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const pelanggan = await prisma.Pelanggan.findMany();
  res.json(pelanggan);
});

module.exports = router;