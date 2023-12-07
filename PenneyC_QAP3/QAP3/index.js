const express = require("express");
const app = express();
const port = 3000;

// Set up routes
const viewRoutes = require("./routes/viewRoutes");

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", function (req, res) {
  // Assuming you have an `inventory` array with the data
  const inventory = [
    { name: "Paintbrush", quantity: 10, price: 5.99 },
    { name: "Canvas", quantity: 20, price: 9.99 },
    { name: "Acrylic Paint Set", quantity: 5, price: 19.99 },
  ];

  res.render("index", { inventory: inventory });
});

// Route handler for editing an item
app.get("/edit/:id", function (req, res) {
  const itemId = req.params.id;
  // Perform the desired action to edit the item with the given ID
  console.log("Edit item with ID:", itemId);
  // Redirect or render a response as needed
});

// Route handler for deleting an item
app.get("/delete/:id", function (req, res) {
  const itemId = req.params.id;
  // Perform the desired action to delete the item with the given ID
  console.log("Delete item with ID:", itemId);
  // Redirect or render a response as needed
});

// Route handler for adding a new item
app.post("/add", function (req, res) {
  // Perform the desired action to add a new item
  console.log("Add new item");
  // Redirect or render a response as needed
});

// Event listeners for buttons
app.use(express.urlencoded({ extended: true }));

app.post("/edit/:id", function (req, res) {
  const itemId = req.params.id;
  // Perform the desired action to edit the item with the given ID
  console.log("Edit item with ID:", itemId);
  // Redirect or render a response as needed
});

app.post("/delete/:id", function (req, res) {
  const itemId = req.params.id;
  // Perform the desired action to delete the item with the given ID
  console.log("Delete item with ID:", itemId);
  // Redirect or render a response as needed
});

app.post("/add", function (req, res) {
  // Perform the desired action to add a new item
  console.log("Add new item");
  // Redirect or render a response as needed
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
