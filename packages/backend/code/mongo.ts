import { Db, MongoClient } from "mongodb";

/**
 * Sets up the MongoDB database.
 */
export async function setupMongoDatabase(): Promise<Db | undefined> {
  const localUrl = `mongodb://0.0.0.0:27017/`;
  const mongoUrl = process.env.MONGO_URL || localUrl;
  let db: Db | undefined;

  try {
    const mongoClient = await MongoClient.connect(mongoUrl);
    db = mongoClient?.db("codenamesdb");
  } catch (error) {
    throw error;
  }

  return db;
}
