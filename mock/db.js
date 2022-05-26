const routes = require("./routes");
const components = require("./components");
const pages = require("./pages");

const DB = {
  routes,
  components,
  pages,
};

module.exports = () => DB;
