const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async (uri) => {
	console.log("DB CONNECTED");
	return mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB;
