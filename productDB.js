require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductJSON = require("./products.json");

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await Product.deleteMany();
		await Product.create(ProductJSON);
		console.log("SUCCESS");
	} catch (error) {
		console.log(error);
	}
};

start();
