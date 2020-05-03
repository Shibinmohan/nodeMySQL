const express = require("express");
const bodyparser = require('body-parser');


const customerRoute = require('./routes/customer.routes')

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Testing.." });
});
app.use('/customers', customerRoute);
// require("./routes/customer.routes")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
