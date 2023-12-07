const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "PenneyC_QAP3",
  password: "admin", // Make sure to provide the correct password here
  port: 5432,
});

module.exports = pool;
