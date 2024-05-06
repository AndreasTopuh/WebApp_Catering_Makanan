const prisma = require("../db");

const { findCustomers } = require("./pelanggan.repository");

const getAllCustomers = async () => {
  const customers = await findCustomers();
  return customers;
};

module.exports = {
  getAllCustomers,
};
