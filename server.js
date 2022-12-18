const server = require("express");

const App = server();
const PORT = 3000;

App.get("/", (req, res) => {
  res.send("Bonjour");
});

App.listen(PORT, () => {
  console.log(`listen to port : ${PORT}`);
});
