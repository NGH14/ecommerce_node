const app = require("./src/app.js");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(PORT)
})