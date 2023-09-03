const client = require("../models/cosmosDB");
const dotenv = require("dotenv");
dotenv.config();

const getProducts = async (req, res) => {
  const databaseId = process.env.COSMOSDB_DATABASE;
  const containerId = "products";
  try {
    const { resources: items } = await client
      .database(databaseId)
      .container(containerId)
      .items.query("SELECT * FROM d")
      .fetchAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProducts;
