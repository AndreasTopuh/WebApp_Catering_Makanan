const { findMenus } = require("./menu.repository");

const getAllMenus = async () => {
  const menus = await findMenus();
  return menus;
};

module.exports = {
  getAllMenus,
};
