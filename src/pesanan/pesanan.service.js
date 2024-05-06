const { findOrders } = require("./pesanan.repository");

const getAllOrders = async () => {
  const orders = await findOrders();
  return orders;
};

module.exports = {
  getAllOrders,
};
