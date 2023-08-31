import { CosmosClient } from "@azure/cosmos";
import config from "../config.js";
import * as dotenv from "dotenv";
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

export default client;
