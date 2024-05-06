const prisma = require("../db/index.js");

const findOrders = async () => {
  const orders = await prisma.Pesanan.findMany();
  return orders;
};

module.exports = {
  findOrders,
};
