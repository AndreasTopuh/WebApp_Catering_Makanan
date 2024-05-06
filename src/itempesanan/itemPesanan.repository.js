const prisma = require("../db/index.js");

const findItemsPesanan = async () => {
  const itemsPesanan = await prisma.ItemPesanan.findMany();
  return itemsPesanan;
};

module.exports = {
  findItemsPesanan,
};
