import client from "../models/cosmosDB.js";
import config from "../config.js ";

export const getEmployees = async (req, res) => {
  const endpoint = config.endpoint;
  const key = config.key;

  const databaseId = config.database.id;
  const containerId = config.container.id;
  const partitionKey = { kind: "Hash", paths: ["/partitionKey"] };

  try {
    const { resources: items } = await client
      .database(databaseId)
      .container(containerId)
      .items.query("SELECT * FROM c")
      .fetchAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
