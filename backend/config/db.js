const mongoose = require("mongoose");
require("dotenv").config();
const database_link = process.env.DATABASE;
const connection = mongoose.connect(database_link);
module.exports = { connection };
