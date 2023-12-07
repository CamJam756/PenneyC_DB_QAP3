const dataModel = require("../models/dataModel");

async function renderView(req, res) {
  try {
    const data = await dataModel.getAllData();
    res.render("index", { data });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Internal server error");
  }
}

module.exports = { renderView };
