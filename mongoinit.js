const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MongoInit = async () => {
    try {
        const dbURI = process.env.MONGO_URI; 
        if (!dbURI) {
            throw new Error("Missing MONGO_URI in environment variables.");
        }

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME || "defaultDB",
        });

        mongoose.set("toJSON", { virtuals: true });
        mongoose.set("toObject", { virtuals: true });

        console.log("✅ MongoDB Connected Successfully!");
        return true;
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        return false;
    }
};

module.exports = MongoInit;
