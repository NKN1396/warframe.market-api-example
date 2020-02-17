//Dependencies
const axios = require("axios").default	//The HTTP request client

//Info
const token = require("./token.json")

//Create a client instance
const market = axios.create({
	baseURL: "https://api.warframe.market/v1",
	timeout: 1000,
	headers: {
		"content-type": "application/json",
		"accept": "application/json",
		"platform": "pc",
		"language": "en",
	}
})

const nkn1396 = axios.create({
	baseURL: "https://api.warframe.market/v1",
	timeout: 1000,
	headers: {
		"content-type": "application/json",
		"accept": "application/json",
		"platform": "pc",
		"language": "en",
		"authorization": `JWT ${token}`,
	}
})

/*
//Anonymous request
market.get("/items")
	.then(response => {
		const fs = require("fs")
		fs.writeFile("./items.json", JSON.stringify(response.data), {}, ()=>{})
		console.log(response.data)
	})
	.catch(console.error)
//*/

//Authorized request
//The following puts one Latron Prime Receiver on warframe.market
nkn1396.post("/profile/orders", {
	"order_type": "sell",
	"item_id": "54a73e65e779893a797fff4b",
	"platinum": 1337,
	"quantity": 1,
})
	.then(response => {
		console.log(response)
		console.log("SUCCESS!")
	})
	.catch(console.error)
