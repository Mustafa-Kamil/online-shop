const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

// let mongodbURL =
//   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";
// if (process.env.MONGODB_URL) {
//   mongodbURL = process.env.MONGODB_URL;
// }

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
