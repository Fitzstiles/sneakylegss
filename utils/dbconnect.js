const { MongoClient } = require("mongodb");
const uri = process.env.MONGO__URI;
export const client = new MongoClient(uri);
