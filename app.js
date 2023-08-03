require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const connectDB = require("./db/connect");
const product_routes = require("./routes/products");

app.get("/", (req, res) => {
	res.send("I am live");
});

//middleware to setup router
app.use("/api/products", product_routes);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`${PORT} Yes, I am connected`);
		});
	} catch (error) {
		console.log(error.message);
	}
};

start();
