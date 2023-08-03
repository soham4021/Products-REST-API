const Product = require("../models/products");
const mongoose = require("mongoose");

const getAllProducts = async (req, res) => {
	const modifiedSearch = { ...req.query };
	console.log(modifiedSearch);
	if (req.query.rating) {
		const x = parseFloat(req.query.rating);
		modifiedSearch.rating = { $gte: x };
	}
	if (req.query.price) {
		const x = parseFloat(req.query.price);
		modifiedSearch.price = x;
	}
	const queryFields = Object.keys(Product.schema.paths);
	console.log(queryFields);
	const queryObject = {};

	for (const field in modifiedSearch) {
		if (queryFields.includes(field)) {
			if (field === "name") {
				queryObject[field] = new RegExp(modifiedSearch[field], "i");
			} else if (field === "company") {
				queryObject[field] = new RegExp(modifiedSearch[field], "i");
			} else {
				queryObject[field] = modifiedSearch[field];
			}
		}
	}
	if (req.query.id) {
		if (mongoose.Types.ObjectId.isValid(req.query.id)) {
			queryObject["_id"] = mongoose.Types.ObjectId(req.query.id);
		} else {
			return res.status(400).json({ error: "Invalid product ID format." });
		}
	}
	let results = Product.find(queryObject);
	if (req.query.sort) {
		const sortResults = req.query.sort.split(",").join(" ");
		results = results.sort(sortResults);
	}
	if (req.query.select) {
		const select = req.query.select.split(",").join(" ");
		results = results.select(select);
	}

	let page = Number(req.query.page) || 1;
	let limit = Number(req.query.limit) || 10;
	let skip = (page - 1) * limit;

	results = results.skip(skip).limit(limit);

	const filteredData = await results;
	console.log(req.query);
	res
		.status(200)
		.json({ Products: filteredData, NumberOfProducts: filteredData.length });
};

const testSite = async (req, res) => {
	res.status(200).json({ msg: "Test site working." });
};

const filtering = async (req, res) => {
	const modifiedSearch = { ...req.query };
	console.log(modifiedSearch);
	if (req.query.rating) {
		const x = parseFloat(req.query.rating);
		modifiedSearch.rating = { $gte: x };
	}
	const filteredData = await Product.find(modifiedSearch);
	console.log(req.query);
	res.status(200).json({ MYDATA: filteredData });
};

module.exports = { getAllProducts, testSite, filtering };
