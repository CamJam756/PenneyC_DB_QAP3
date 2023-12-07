const pool = require("../dal/database");

async function getAllData() {
  try {
    const query = "SELECT * FROM roles";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
}

module.exports = { getAllData };
