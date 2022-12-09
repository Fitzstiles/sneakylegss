import { client } from "../../utils/dbconnect";

export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db("sneakylegs");
    const products = database.collection("products");
    const returnedProducts = await products.find().toArray();
    res.send(returnedProducts);
  } finally {
    await client.close();
  }
}
