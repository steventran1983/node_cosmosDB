import client from "../models/cosmosDB.js";
import config from "../config.js ";

export const getEmployees = async (req, res) => {
  const databaseId = config.database.id;
  const containerId = "employees";
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
