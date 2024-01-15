const mongoose = require('mongoose');
const config = require('config');

const connection_uri = config.get("mongo_uri");

const connectToDb = async () => {
    try {
        await mongoose.connect(connection_uri);
        console.log("MongoDb running");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDb;