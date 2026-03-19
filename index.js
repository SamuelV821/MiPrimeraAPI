const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.disable("x-powered-by");


app.get("/", (req, res) => {
  res.send("Hola mundo");
});



app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});