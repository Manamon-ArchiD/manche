import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
    

dotenv.config();
// Replace these values with your MongoDB connection details
const url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;


let db: any;

export async function connectToDB() {
    if (!url) throw new Error("MongoDB connection string is not defined");
    
    // Create a new client
    const client = new MongoClient(url); // No need for `useNewUrlParser` or `useUnifiedTopology`
    
    // Connect to the MongoDB cluster
    await client.connect();
    
    db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);
}

export function getCollection(collectionName: string) {
    if (!db) throw new Error("Database not initialized");
    return db.collection(collectionName);
}
