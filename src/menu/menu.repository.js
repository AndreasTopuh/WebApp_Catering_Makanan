const prisma = require("../db/index.js");

const findMenus = async () => {
  const menus = await prisma.Menu.findMany();
  return menus;
};

module.exports = {
  findMenus,
};
