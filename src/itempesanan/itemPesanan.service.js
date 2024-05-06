const { findItemsPesanan } = require("./itemPesanan.repository");

const getAllItemsPesanan = async () => {
  const itemsPesanan = await findItemsPesanan();
  return itemsPesanan;
};

module.exports = {
  getAllItemsPesanan,
};
