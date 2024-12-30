const Koa = require("koa");

const app = new Koa();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

modules.exports = app;
