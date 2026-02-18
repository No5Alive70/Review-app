import app from "./server.js"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config();

const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.tysuv1g.mongodb.net/`;

const client = new MongoClient(uri);

const port = process.env.PORT || 8000;

try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    await ReviewsDAO.injectDB(client)

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
} catch (e) {
    console.error(e);
    process.exit(1);
}
