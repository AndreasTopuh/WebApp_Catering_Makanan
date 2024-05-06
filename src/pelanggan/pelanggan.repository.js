const prisma = require("../db/index.js");

const findCustomers = async () => {
  const customers = await prisma.Pelanggan.findMany();
  return customers;
};

module.exports = {
  findCustomers,
};
