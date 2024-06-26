const prisma = require("../db/index.js");

const findItemsPesanan = async () => {
  const itemsPesanan = await prisma.ItemPesanan.findMany();
  return itemsPesanan;
};

const findItemPesananById = async (id) => {
  const itemPesanan = await prisma.ItemPesanan.findUnique({
    where: { id: parseInt(id) },
  });
  return itemPesanan;
};

const createItemPesanan = async (data) => {
  const existingPesanan = await prisma.Pesanan.findUnique({
    where: { id: data.pesananId },
  });

  if (!existingPesanan) {
    throw new Error("Pesanan dengan ID tersebut tidak ditemukan");
  }

  const newItemPesanan = await prisma.ItemPesanan.create({ data });
  return newItemPesanan;
};

const updateItemPesanan = async (id, data) => {
  const updatedItemPesanan = await prisma.ItemPesanan.update({
    where: { id: parseInt(id) },
    data,
  });
  return updatedItemPesanan;
};

const deleteItemPesanan = async (id) => {
  const deletedItemPesanan = await prisma.ItemPesanan.delete({
    where: { id: parseInt(id) },
  });
  return deletedItemPesanan;
};

module.exports = {
  findItemsPesanan,
  findItemPesananById,
  createItemPesanan,
  updateItemPesanan,
  deleteItemPesanan,
};
