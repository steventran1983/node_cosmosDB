const dotenv = require("dotenv");
dotenv.config();
// const client = require("../models/cosmosDB");

const getEmployees = async (req, res) => {
  res.json({ message: "This is get all employee" });
  // const databaseId = process.env.COSMOSDB_DATABASE;
  // const containerId = process.env.COSMOSDB_CONTAINER_EMPLOYEES;
  // try {
  //   const { resources: items } = await client
  //     .database(databaseId)
  //     .container(containerId)
  //     .items.query("SELECT * FROM d")
  //     .fetchAll();
  //   res.status(200).json(items);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

module.exports = getEmployees;
