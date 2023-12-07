const dataModel = require("../models/dataModel");

async function getData(req, res) {
  try {
    const data = await dataModel.getAllData();
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createData(req, res) {
  try {
    // Get the data from the request body
    const newData = req.body;

    // Create the data using the dataModel
    const createdData = await dataModel.createData(newData);

    // Send the created data as a response
    res.json(createdData);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateData(req, res) {
  try {
    const id = req.params.id;

    // Get the updated data from the request body
    const updatedData = req.body;

    // Update the data using the dataModel
    await dataModel.updateData(id, updatedData);

    // Send a success response
    res.json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function partialUpdateData(req, res) {
  try {
    const id = req.params.id;

    // Get the partial update data from the request body
    const partialUpdateData = req.body;

    // Partially update the data using the dataModel
    await dataModel.partialUpdateData(id, partialUpdateData);

    // Send a success response
    res.json({ message: "Data partially updated successfully" });
  } catch (error) {
    console.error("Error partially updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteData(req, res) {
  try {
    const id = req.params.id;

    // Delete the data using the dataModel
    await dataModel.deleteData(id);

    // Send a success response
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getData,
  createData,
  updateData,
  partialUpdateData,
  deleteData,
};
