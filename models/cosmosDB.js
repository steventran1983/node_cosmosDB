const { CosmosClient } = require("@azure/cosmos");
const dotenv = require("dotenv");
dotenv.config();

const endpoint = process.env.COSMOSDB_ENDPOINT;
const key = process.env.COSMOSDB_KEY;
const partitionKey = { kind: "Hash", paths: ["/partitionKey"] };

const options = {
  endpoint: endpoint,
  key: key,
  userAgentSuffix: "CosmosDBJavascriptQuickstart",
};

const client = new CosmosClient(options);

module.exports = client;
