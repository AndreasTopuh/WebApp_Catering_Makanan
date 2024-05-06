const { getAllItemsPesanan } = require("./itemPesanan.service");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const itemsPesanan = await getAllItemsPesanan();
  res.json(itemsPesanan);
});

module.exports = router;
