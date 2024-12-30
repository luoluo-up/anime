const app = require("../main");
app.get("/", async (ctx) => {
  ctx.body = "Hello World";
});
