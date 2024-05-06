const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const menu = await prisma.Menu.findMany();
  res.json(menu);
});

module.exports = router;
